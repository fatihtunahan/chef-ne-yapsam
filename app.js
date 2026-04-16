const recipeLibrary = [
  {
    name: "Menemen",
    ingredients: ["yumurta", "domates", "biber", "sogan", "peynir"],
    description:
      "Domates ve biberi kavurup yumurta ekleyerek hizli bir kahvalti ya da hafif ogun hazirlayabilirsin.",
  },
  {
    name: "Peynirli Omlet",
    ingredients: ["yumurta", "peynir", "sut", "tereyagi", "maydanoz"],
    description:
      "Yumurtayi peynirle cirpip tavada pisirerek cok az malzemeyle doyurucu bir secenek elde edebilirsin.",
  },
  {
    name: "Firinda Patates",
    ingredients: ["patates", "zeytinyagi", "kekik", "pul biber", "sogan"],
    description:
      "Patatesleri baharatla harmanlayip firinda kizartarak ana yemegin yanina veya tek basina sunabilirsin.",
  },
  {
    name: "Kremali Tavuklu Makarna",
    ingredients: ["makarna", "tavuk", "krema", "mantar", "sarmisak", "peynir"],
    description:
      "Tavuk ve mantari soteleyip kremayla birlestirerek restoran hissi veren bir makarna yapabilirsin.",
  },
  {
    name: "Tavuklu Pilav",
    ingredients: ["pirinc", "tavuk", "sogan", "tereyagi", "karabiber"],
    description:
      "Haslanmis ya da sotelenmis tavugu pilavla bulusturup tek tabakta dengeli bir yemek hazirlayabilirsin.",
  },
  {
    name: "Mercimek Corbasi",
    ingredients: ["mercimek", "sogan", "havuc", "salca", "tereyagi"],
    description:
      "Mercimegi sebzelerle kaynatip blenderdan gecirerek ekonomik ve klasik bir corba yapabilirsin.",
  },
  {
    name: "Sebzeli Makarna",
    ingredients: ["makarna", "domates", "biber", "kabak", "sogan", "sarmisak"],
    description:
      "Elindeki sebzeleri soteleyip makarnaya karistirarak hafif ve renkli bir ogun cikarabilirsin.",
  },
  {
    name: "Patatesli Yumurta",
    ingredients: ["yumurta", "patates", "sogan", "pul biber"],
    description:
      "Patatesleri yumusayana kadar pisirip yumurtayla tamamlayarak pratik tava yemegi hazirlayabilirsin.",
  },
  {
    name: "Yogurtlu Tavuklu Bowl",
    ingredients: ["tavuk", "yogurt", "pirinc", "salatalik", "domates"],
    description:
      "Tavuk, pilav ve yogurdu bir araya getirip ferah ve dengeli bir tabak hazirlayabilirsin.",
  },
  {
    name: "Kasarli Tost",
    ingredients: ["ekmek", "kasar", "domates", "tereyagi"],
    description:
      "Az malzemeyle cok hizli bir atistirmalik veya hafif ogun icin ideal secenektir.",
  },
];

const ingredientsInput = document.getElementById("ingredients");
const suggestBtn = document.getElementById("suggestBtn");
const clearBtn = document.getElementById("clearBtn");
const results = document.getElementById("results");
const emptyState = document.getElementById("emptyState");
const sampleTags = document.querySelectorAll(".sample-tag");
const modeNotice = document.getElementById("modeNotice");

function normalizeText(text) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/\u0131/g, "i")
    .replace(/\u011f/g, "g")
    .replace(/\u00fc/g, "u")
    .replace(/\u015f/g, "s")
    .replace(/\u00f6/g, "o")
    .replace(/\u00e7/g, "c")
    .trim();
}

function parseIngredients(rawValue) {
  return rawValue
    .split(/,|\n/)
    .map((item) => normalizeText(item))
    .filter(Boolean);
}

function setModeNotice(message, tone = "info") {
  modeNotice.textContent = message;
  modeNotice.dataset.tone = tone;
}

function buildChefNote(userIngredients, recipe) {
  const matched = recipe.ingredients.filter((ingredient) =>
    userIngredients.includes(ingredient)
  );

  const missing = recipe.ingredients.filter(
    (ingredient) => !userIngredients.includes(ingredient)
  );

  const matchText =
    missing.length === 0
      ? "Tum ana malzemeler sende var. Direkt deneyebilirsin."
      : `Sende olanlarla cok yakinsin. Gerekirse su dokunuslari ekleyebilirsin: ${missing
          .slice(0, 2)
          .join(", ")}.`;

  return {
    matched,
    note: `${recipe.description} ${matchText}`,
  };
}

function scoreRecipe(userIngredients, recipe) {
  const matchedCount = recipe.ingredients.filter((ingredient) =>
    userIngredients.includes(ingredient)
  ).length;

  const score = matchedCount / recipe.ingredients.length;

  return {
    recipe,
    matchedCount,
    score,
  };
}

function getFallbackSuggestions(userIngredients) {
  const ranked = recipeLibrary
    .map((recipe) => scoreRecipe(userIngredients, recipe))
    .filter((item) => item.matchedCount > 0)
    .sort((a, b) => b.score - a.score || b.matchedCount - a.matchedCount)
    .slice(0, 4);

  if (ranked.length > 0) {
    return ranked.map(({ recipe, score }) => ({
      ...recipe,
      ...buildChefNote(userIngredients, recipe),
      percentage: Math.max(40, Math.round(score * 100)),
    }));
  }

  return [
    {
      name: "Serbest Ev Usulu Sote",
      matched: userIngredients.slice(0, 4),
      percentage: 62,
      note:
        "Bu malzemeler birebir bir klasik tarife oturmuyor ama sogan, baharat ve varsa yag ile tavada soteleyip yanina yogurt veya pilav ekleyerek guzel bir tabak cikarabilirsin.",
    },
  ];
}

function clearResults() {
  results.innerHTML = "";
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  return element;
}

function renderResultNote(text) {
  const note = createTextElement("div", "result-note", text);
  results.appendChild(note);
}

function createChipRow(items) {
  const chipRow = document.createElement("div");
  chipRow.className = "chip-row";

  items.forEach((item) => {
    chipRow.appendChild(createTextElement("span", "chip", item));
  });

  return chipRow;
}

function createRecipeCard(item, options = {}) {
  const {
    usedKey = "matched",
    percentageKey = "percentage",
    descriptionKey = "note",
    showMissing = false,
    showSteps = false,
  } = options;

  const card = document.createElement("article");
  card.className = "recipe-card";

  const top = document.createElement("div");
  top.className = "recipe-top";
  top.appendChild(createTextElement("h3", "", item.name));
  top.appendChild(
    createTextElement(
      "span",
      "match-badge",
      `Uyum %${item[percentageKey]}`
    )
  );

  card.appendChild(top);
  card.appendChild(createTextElement("p", "", item[descriptionKey]));

  const usedIngredients = item[usedKey] || [];
  if (usedIngredients.length > 0) {
    card.appendChild(createChipRow(usedIngredients));
  }

  if (showMissing && item.missing_ingredients && item.missing_ingredients.length > 0) {
    card.appendChild(createTextElement("p", "missing-title", "Eksik ama istege bagli malzemeler"));
    card.appendChild(createChipRow(item.missing_ingredients));
  }

  if (showSteps && item.steps && item.steps.length > 0) {
    card.appendChild(createTextElement("p", "steps-title", "Kisa yapilis"));

    const list = document.createElement("ol");
    list.className = "steps-list";

    item.steps.forEach((step) => {
      list.appendChild(createTextElement("li", "", step));
    });

    card.appendChild(list);
  }

  return card;
}

function renderFallbackSuggestions(list, message) {
  clearResults();
  emptyState.hidden = true;

  if (message) {
    renderResultNote(message);
  }

  list.forEach((item) => {
    results.appendChild(createRecipeCard(item));
  });
}

function renderAiSuggestions(payload) {
  clearResults();
  emptyState.hidden = true;

  if (payload.intro) {
    renderResultNote(payload.intro);
  }

  payload.suggestions.forEach((item) => {
    results.appendChild(
      createRecipeCard(item, {
        usedKey: "used_ingredients",
        percentageKey: "match_percentage",
        descriptionKey: "why",
        showMissing: true,
        showSteps: true,
      })
    );
  });

  if (payload.closing_tip) {
    renderResultNote(payload.closing_tip);
  }
}

function setLoadingState(isLoading) {
  suggestBtn.disabled = isLoading;
  suggestBtn.textContent = isLoading ? "Dusunuyor..." : "Yemek Oner";
}

async function getAiSuggestions(userIngredients) {
  const response = await fetch("/api/suggest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: userIngredients,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "AI servisine su an ulasilamadi.");
  }

  return data;
}

async function handleSuggest() {
  const userIngredients = parseIngredients(ingredientsInput.value);

  if (userIngredients.length === 0) {
    emptyState.hidden = false;
    clearResults();
    emptyState.innerHTML = "<p>Once en az bir malzeme yazman gerekiyor.</p>";
    return;
  }

  setLoadingState(true);

  try {
    const aiSuggestions = await getAiSuggestions(userIngredients);
    renderAiSuggestions(aiSuggestions);
    setModeNotice(
      "Gercek AI modu aktif. Oneriler OpenAI tarafindan olusturuldu.",
      "success"
    );
  } catch (error) {
    const fallbackSuggestions = getFallbackSuggestions(userIngredients);
    renderFallbackSuggestions(
      fallbackSuggestions,
      "Gercek AI baglantisi su anda aktif degil. Sistem demo onerileriyle calisti."
    );
    setModeNotice(
      "Demo modu acik. Vercel uzerinde OPENAI_API_KEY tanimlayinca gercek AI devreye girecek.",
      "warning"
    );
  } finally {
    setLoadingState(false);
  }
}

function resetApp() {
  ingredientsInput.value = "";
  clearResults();
  emptyState.hidden = false;
  emptyState.innerHTML = "<p>Malzemelerini gir ve butona bas.</p>";
  setModeNotice(
    "Bu dosyayi tek basina actiginda demo modunda calisir. Vercel'e koyup OpenAI anahtarini eklediginde gercek AI moduna gecer.",
    "info"
  );
}

sampleTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    ingredientsInput.value = tag.dataset.fill;
    handleSuggest();
  });
});

suggestBtn.addEventListener("click", handleSuggest);
clearBtn.addEventListener("click", resetApp);

ingredientsInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    handleSuggest();
  }
});
