const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";

const responseSchema = {
  type: "object",
  additionalProperties: false,
  required: ["intro", "suggestions", "closing_tip"],
  properties: {
    intro: {
      type: "string",
    },
    suggestions: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "name",
          "match_percentage",
          "why",
          "used_ingredients",
          "missing_ingredients",
          "steps",
        ],
        properties: {
          name: {
            type: "string",
          },
          match_percentage: {
            type: "integer",
          },
          why: {
            type: "string",
          },
          used_ingredients: {
            type: "array",
            items: {
              type: "string",
            },
          },
          missing_ingredients: {
            type: "array",
            items: {
              type: "string",
            },
          },
          steps: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
    closing_tip: {
      type: "string",
    },
  },
};

function readBody(body) {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
}

function extractStructuredText(responseData) {
  if (typeof responseData.output_text === "string" && responseData.output_text.trim()) {
    return responseData.output_text;
  }

  if (!Array.isArray(responseData.output)) {
    return "";
  }

  for (const item of responseData.output) {
    if (!Array.isArray(item.content)) {
      continue;
    }

    for (const contentItem of item.content) {
      if (
        contentItem &&
        contentItem.type === "output_text" &&
        typeof contentItem.text === "string"
      ) {
        return contentItem.text;
      }
    }
  }

  return "";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Sadece POST istegi kabul ediliyor.",
    });
  }

  const { ingredients } = readBody(req.body);

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({
      error: "Malzeme listesi gerekli.",
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "OPENAI_API_KEY tanimli degil.",
    });
  }

  const developerPrompt = [
    "Sen kullanicinin evdeki malzemelerine gore yemek onerileri veren bir sef asistansin.",
    "Cevabi Turkce uret.",
    "En fazla 3 yemek oner.",
    "Oneriler gercekci, pratik ve evde yapilabilir olsun.",
    "Kullanicinin verdigi malzemeleri oncelikle kullan.",
    "Eksik malzeme varsa sadece kucuk ve makul tamamlayicilari belirt.",
    "Adimlari kisa, guvenli ve net yaz.",
    "Sadece verilen JSON semasina uygun cevap don.",
  ].join(" ");

  const userPrompt = [
    "Kullanicinin elindeki malzemeler:",
    ingredients.join(", "),
    "",
    "Bu malzemelerle yapilabilecek en uygun yemekleri oner.",
  ].join("\n");

  try {
    const openAiResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        input: [
          {
            role: "developer",
            content: developerPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "meal_suggestions",
            strict: true,
            schema: responseSchema,
          },
        },
      }),
    });

    const responseData = await openAiResponse.json();

    if (!openAiResponse.ok) {
      const message =
        responseData?.error?.message || "OpenAI istegi basarisiz oldu.";

      return res.status(openAiResponse.status).json({
        error: message,
      });
    }

    const rawOutput = extractStructuredText(responseData);

    if (!rawOutput) {
      return res.status(502).json({
        error: "Modelden okunabilir bir cevap alinmadi.",
      });
    }

    const parsedOutput = JSON.parse(rawOutput);

    return res.status(200).json(parsedOutput);
  } catch (error) {
    return res.status(500).json({
      error: "Sunucu tarafinda bir hata olustu.",
      details: error instanceof Error ? error.message : "Bilinmeyen hata",
    });
  }
};
