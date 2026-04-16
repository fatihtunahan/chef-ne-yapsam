const ingredientCatalog = [
  "yumurta",
  "domates",
  "biber",
  "sogan",
  "peynir",
  "sut",
  "tereyagi",
  "maydanoz",
  "patates",
  "zeytinyagi",
  "kekik",
  "pul biber",
  "makarna",
  "tavuk",
  "krema",
  "mantar",
  "sarmisak",
  "pirinc",
  "karabiber",
  "mercimek",
  "havuc",
  "salca",
  "kabak",
  "yogurt",
  "salatalik",
  "ekmek",
  "kasar",
  "kiyma",
  "bulgur",
  "nohut",
  "fasulye",
  "bezelye",
  "pirasa",
  "ispanak",
  "patlican",
  "brokoli",
  "karnabahar",
  "limon",
  "sirke",
  "nane",
  "dereotu",
  "un",
  "irmik",
  "balik",
  "ton baligi",
  "karides",
  "sosis",
  "sucuk",
  "lahana",
  "marul",
  "roka",
  "turp",
  "avokado",
  "misir",
  "barbunya",
  "yesil mercimek",
  "nar eksisi",
  "soya sosu",
  "bal",
  "hardal",
  "ketcap",
  "mayonez",
  "zencefil",
  "zerdecal",
  "kimyon",
  "sumak",
  "defne yapragi",
  "hindistan cevizi sut",
  "susam",
  "tahin",
  "pekmez",
  "ceviz",
  "findik",
  "badem",
  "fistik",
  "muz",
  "elma",
  "armut",
  "cilek",
  "portakal",
  "nar",
  "uzum",
  "kayisi",
  "hurma",
  "tarcin",
  "vanilya",
  "kakao",
  "bal kabagi",
  "semizotu",
  "pancar",
  "kereviz",
  "bamya",
  "enginar",
  "hellim",
  "mozarella",
  "labne",
  "misir unu",
  "yufka",
  "galeta unu",
  "feslegen",
];

const recipeLibrary = [
  {
    name: "Menemen",
    ingredients: ["yumurta", "domates", "biber", "sogan", "peynir"],
    description:
      "Kahvalti ya da hafif aksam yemegi icin domatesli, biberli klasik menemen.",
  },
  {
    name: "Peynirli Omlet",
    ingredients: ["yumurta", "peynir", "sut", "tereyagi", "maydanoz"],
    description:
      "Az malzemeyle hazirlanan, tavada hizlica pisirilen yumusak bir omlet.",
  },
  {
    name: "Firinda Patates",
    ingredients: ["patates", "zeytinyagi", "kekik", "pul biber", "sogan"],
    description:
      "Baharatli patatesleri firinda kizartarak tek basina ya da yan urun olarak sunabilirsin.",
  },
  {
    name: "Kremali Tavuklu Makarna",
    ingredients: ["makarna", "tavuk", "krema", "mantar", "sarmisak", "peynir"],
    description:
      "Kremali sos, tavuk ve mantarla zenginlesen doyurucu bir makarna.",
  },
  {
    name: "Tavuklu Pilav",
    ingredients: ["pirinc", "tavuk", "sogan", "tereyagi", "karabiber"],
    description:
      "Pilavi tavukla birlestiren, tek tabakta doyurucu klasik bir ogun.",
  },
  {
    name: "Mercimek Corbasi",
    ingredients: ["mercimek", "sogan", "havuc", "salca", "tereyagi"],
    description:
      "Mercimek ve sebzelerle hazirlanan sicak, pratik ve ekonomik corba.",
  },
  {
    name: "Sebzeli Makarna",
    ingredients: ["makarna", "domates", "biber", "kabak", "sogan", "sarmisak"],
    description:
      "Eldeki sebzelerle renklenen hafif ve kolay bir makarna alternatifi.",
  },
  {
    name: "Patatesli Yumurta",
    ingredients: ["yumurta", "patates", "sogan", "pul biber"],
    description:
      "Tavada tek kapta cikan, ozellikle kahvaltiya uygun pratik bir tarif.",
  },
  {
    name: "Yogurtlu Tavuklu Bowl",
    ingredients: ["tavuk", "yogurt", "pirinc", "salatalik", "domates"],
    description:
      "Pilav, tavuk ve yogurdu bir araya getiren ferah tabak fikri.",
  },
  {
    name: "Kasarli Tost",
    ingredients: ["ekmek", "kasar", "domates", "tereyagi"],
    description:
      "Hizli atistirmalik ya da hafif ogun olarak kurtarici bir secenek.",
  },
  {
    name: "Kisir",
    ingredients: ["bulgur", "domates", "maydanoz", "nar eksisi", "limon", "sogan"],
    description:
      "Cay saatine ya da hafif ogune uygun, bol yesillikli klasik kisir.",
  },
  {
    name: "Nohutlu Pilav",
    ingredients: ["pirinc", "nohut", "tereyagi", "karabiber"],
    description:
      "Pilavla nohutu birlestiren doyurucu ve ekonomik bir secenek.",
  },
  {
    name: "Kuru Fasulye",
    ingredients: ["fasulye", "sogan", "salca", "tereyagi", "kimyon"],
    description:
      "Turk mutfaginin klasiklerinden, pilav yanina da cok yakisan ana yemek.",
  },
  {
    name: "Ispanakli Borek",
    ingredients: ["ispanak", "yufka", "peynir", "yogurt", "yumurta"],
    description:
      "Firinda kolayca hazirlanan, cay yanina da yakisan pratik borek.",
  },
  {
    name: "Karnabahar Graten",
    ingredients: ["karnabahar", "krema", "peynir", "karabiber"],
    description:
      "Firinda uzeri kizarmis, sebze sevmeyenlere bile hitap eden yagli bir tarif.",
  },
  {
    name: "Mantar Sote",
    ingredients: ["mantar", "sarmisak", "tereyagi", "kekik", "karabiber"],
    description:
      "Et yanina ya da ekmek ustune yakisan hizli mantar tarifi.",
  },
  {
    name: "Tavuk Sote",
    ingredients: ["tavuk", "biber", "sogan", "domates", "sarmisak"],
    description:
      "Tavada hizli pisirilen, pilavla kolayca tamamlanan pratik ana yemek.",
  },
  {
    name: "Sebzeli Bulgur Pilavi",
    ingredients: ["bulgur", "domates", "biber", "sogan", "salca", "kabak"],
    description:
      "Sebzeyle zenginlesen bulgur pilavi, yanina yogurda da cok yakisir.",
  },
  {
    name: "Patlican Musakka",
    ingredients: ["patlican", "kiyma", "domates", "sogan", "salca"],
    description:
      "Firinda ya da tencerede yapilabilen, klasik ev yemegi lezzeti.",
  },
  {
    name: "Kabak Mucver",
    ingredients: ["kabak", "yumurta", "un", "maydanoz", "peynir"],
    description:
      "Disi kizarmis ici yumusak, yogurdun yanina cok yakisan sebze tarifi.",
  },
  {
    name: "Yogurtlu Semizotu Salatasi",
    ingredients: ["semizotu", "yogurt", "sarmisak", "zeytinyagi"],
    description:
      "Ferah, hafif ve ozellikle yaz sofralarina uygun soguk salata.",
  },
  {
    name: "Ton Balikli Salata",
    ingredients: ["ton baligi", "marul", "domates", "misir", "limon"],
    description:
      "Protein agirlikli, hafif ama doyurucu bir salata secenegi.",
  },
  {
    name: "Sucuklu Yumurta",
    ingredients: ["sucuk", "yumurta", "tereyagi"],
    description:
      "Kahvalti masalarinin en hizli ve sevilen sicak tariflerinden biri.",
  },
  {
    name: "Firinda Tavuk ve Patates",
    ingredients: ["tavuk", "patates", "sogan", "kekik", "zeytinyagi"],
    description:
      "Tek tepside firina giren kolay ana yemek, kalabalik sofralara da uygun.",
  },
  {
    name: "Pirasa Yemegi",
    ingredients: ["pirasa", "havuc", "pirinc", "zeytinyagi", "limon"],
    description:
      "Zeytinyagli sevenler icin hafif ve klasik tencere yemegi.",
  },
  {
    name: "Brokoli Corbasi",
    ingredients: ["brokoli", "sut", "tereyagi", "karabiber"],
    description:
      "Puresi kivaminda, yumusak icimli ve ozellikle kis gunlerinde ideal corba.",
  },
  {
    name: "Barbunya Pilaki",
    ingredients: ["barbunya", "havuc", "sogan", "zeytinyagi", "domates"],
    description:
      "Soguk ya da ilik servis edilebilen, zeytinyagli mutfagin klasigi.",
  },
  {
    name: "Karidesli Makarna",
    ingredients: ["karides", "makarna", "sarmisak", "zeytinyagi", "limon"],
    description:
      "Deniz urunleri sevenler icin ferah ve hizli bir makarna tarifi.",
  },
  {
    name: "Balik Tava",
    ingredients: ["balik", "un", "limon", "zeytinyagi"],
    description:
      "Baligi sade ve hizli sekilde one cikan temel yemeklerden biri.",
  },
  {
    name: "Lahana Sarmasi",
    ingredients: ["lahana", "pirinc", "kiyma", "sogan", "salca"],
    description:
      "Biraz emekli ama sofrada her zaman karsilik bulan klasik tarif.",
  },
  {
    name: "Peynirli Gozleme",
    ingredients: ["yufka", "peynir", "maydanoz", "tereyagi"],
    description:
      "Tavada hizla yapilabilen, cay saatine uygun lezzetli atistirmalik.",
  },
  {
    name: "Ispanakli Krep",
    ingredients: ["un", "sut", "yumurta", "ispanak", "peynir"],
    description:
      "Krep hamurunu ispanak ve peynirle birlestiren doyurucu tarif.",
  },
  {
    name: "Patates Salatasi",
    ingredients: ["patates", "maydanoz", "limon", "zeytinyagi", "sogan"],
    description:
      "Haslanmis patatesle hazirlanan, ana yemegin yanina da yakisan salata.",
  },
  {
    name: "Cacik",
    ingredients: ["yogurt", "salatalik", "nane", "sarmisak"],
    description:
      "Ozellikle yaz gunlerinde ferahlik veren cok kolay bir yan lezzet.",
  },
  {
    name: "Feslegenli Domates Salatasi",
    ingredients: ["domates", "feslegen", "zeytinyagi", "mozarella"],
    description:
      "Az malzemeyle cikan, sunumu guzel ve hafif bir salata tabagi.",
  },
  {
    name: "Bal Kabagi Corbasi",
    ingredients: ["bal kabagi", "sut", "tereyagi", "karabiber"],
    description:
      "Tatli dokulu sebzeyi sicak ve yumusak bir corbaya donusturur.",
  },
  {
    name: "Zeytinyagli Enginar",
    ingredients: ["enginar", "zeytinyagi", "limon", "dereotu"],
    description:
      "Hafif ve sofrada sik duran zeytinyagli tariflerden biri.",
  },
  {
    name: "Kereviz Salatasi",
    ingredients: ["kereviz", "yogurt", "mayonez", "ceviz"],
    description:
      "Kivircik dokulu, soguk servis edilen ve meze gibi kullanilan salata.",
  },
  {
    name: "Bamya Yemegi",
    ingredients: ["bamya", "domates", "sogan", "limon", "zeytinyagi"],
    description:
      "Eksili dokusuyla sevenine cok hitap eden hafif tencere yemegi.",
  },
  {
    name: "Nohutlu Salata",
    ingredients: ["nohut", "domates", "salatalik", "maydanoz", "limon"],
    description:
      "Hizli hazirlanan, et yemeden de doyuran soguk salata alternatifi.",
  },
  {
    name: "Tavuklu Marul Salatasi",
    ingredients: ["tavuk", "marul", "peynir", "ekmek", "hardal"],
    description:
      "Kizarmis ekmek ve tavukla daha doyurucu hale gelen yesil salata.",
  },
  {
    name: "Hellim Salatasi",
    ingredients: ["hellim", "roka", "domates", "avokado", "limon"],
    description:
      "Izgara hellimi ferah malzemelerle bulusturan modern tabak fikri.",
  },
  {
    name: "Mozarella Domates Tabagi",
    ingredients: ["mozarella", "domates", "feslegen", "zeytinyagi"],
    description:
      "Sunumu kolay, hafif ve misafir icin de uygun soguk servis tabagi.",
  },
  {
    name: "Tahinli Pekmezli Muzlu Bowl",
    ingredients: ["muz", "tahin", "pekmez", "findik", "tarcin"],
    description:
      "Kahvalti ya da tatli krizleri icin hizli hazirlanan kasik tatlisi.",
  },
  {
    name: "Meyve Salatasi",
    ingredients: ["muz", "elma", "armut", "cilek", "portakal", "nar"],
    description:
      "Taze meyvelerle cikan hafif ve renkli tatli alternatifi.",
  },
  {
    name: "Irmik Helvasi",
    ingredients: ["irmik", "tereyagi", "sut", "vanilya"],
    description:
      "Az malzemeyle cikan klasik tatli, ozellikle sicak servis edilir.",
  },
  {
    name: "Tahinli Yogurt Dip",
    ingredients: ["tahin", "yogurt", "limon", "sarmisak", "zeytinyagi"],
    description:
      "Atistirmaliklara ya da izgara sebzelere eslik eden yogun sos tarifi.",
  },
  {
    name: "Avokadolu Salata",
    ingredients: ["avokado", "domates", "marul", "limon", "zeytinyagi"],
    description:
      "Ferah ve modern sunumlu, hafif ana ogun gibi de kullanilabilen salata.",
  },
  {
    name: "Feslegenli Domatesli Makarna",
    ingredients: ["makarna", "domates", "sarmisak", "zeytinyagi", "feslegen"],
    description:
      "Sade ama aromasi kuvvetli klasik domates soslu makarna.",
  },
  {
    name: "Patates Kroket",
    ingredients: ["patates", "galeta unu", "yumurta", "peynir", "karabiber"],
    description:
      "Disi kizarmis ici yumusak atistirmalik ya da yan urun secenegi.",
  },
];

const ingredientSet = new Set(ingredientCatalog);
const MINIMUM_MEANINGFUL_MATCHES = 2;
const ingredientsInput = document.getElementById("ingredients");
const suggestBtn = document.getElementById("suggestBtn");
const clearBtn = document.getElementById("clearBtn");
const results = document.getElementById("results");
const emptyState = document.getElementById("emptyState");
const sampleTags = document.querySelectorAll(".sample-tag");
const ingredientCatalogElement = document.getElementById("ingredientCatalog");
const recipeCountElement = document.getElementById("recipeCount");
const ingredientCountElement = document.getElementById("ingredientCount");

function normalizeText(text) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/\u0131/g, "i")
    .replace(/\u011f/g, "g")
    .replace(/\u00fc/g, "u")
    .replace(/\u015f/g, "s")
    .replace(/\u00f6/g, "o")
    .replace(/\u00e7/g, "c")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueItems(list) {
  return [...new Set(list)];
}

function parseIngredients(rawValue) {
  return uniqueItems(
    rawValue
      .split(/,|\n/)
      .map((item) => normalizeText(item))
      .filter(Boolean)
  );
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  element.textContent = text;
  return element;
}

function setIngredientsInputValue(ingredients) {
  ingredientsInput.value = ingredients.join(", ");
}

function getSelectedIngredients() {
  return parseIngredients(ingredientsInput.value);
}

function syncIngredientPills() {
  const selectedIngredients = new Set(getSelectedIngredients());

  ingredientCatalogElement
    .querySelectorAll(".ingredient-pill")
    .forEach((button) => {
      const isSelected = selectedIngredients.has(button.dataset.ingredient);
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
}

function clearResults() {
  results.innerHTML = "";
}

function renderNote(text) {
  results.appendChild(createTextElement("div", "result-note", text));
}

function createChipRow(items) {
  const row = document.createElement("div");
  row.className = "chip-row";

  items.forEach((item) => {
    row.appendChild(createTextElement("span", "chip", item));
  });

  return row;
}

function scoreRecipe(userIngredients, recipe) {
  const matched = recipe.ingredients.filter((ingredient) =>
    userIngredients.includes(ingredient)
  );
  const missing = recipe.ingredients.filter(
    (ingredient) => !userIngredients.includes(ingredient)
  );
  const ingredientCoverage = matched.length / recipe.ingredients.length;
  const inputCoverage = matched.length / userIngredients.length;
  const score = ingredientCoverage * 0.7 + inputCoverage * 0.3;

  return {
    recipe,
    matched,
    missing,
    score,
  };
}

function getSuggestions(userIngredients) {
  const knownIngredients = userIngredients.filter((ingredient) =>
    ingredientSet.has(ingredient)
  );
  const unknownIngredients = userIngredients.filter(
    (ingredient) => !ingredientSet.has(ingredient)
  );

  if (knownIngredients.length < MINIMUM_MEANINGFUL_MATCHES) {
    return {
      knownIngredients,
      unknownIngredients,
      ranked: [],
      notEnoughKnownIngredients: true,
    };
  }

  const ranked = recipeLibrary
    .map((recipe) => scoreRecipe(knownIngredients, recipe))
    .filter((item) => item.matched.length >= MINIMUM_MEANINGFUL_MATCHES)
    .sort((a, b) => b.score - a.score || b.matched.length - a.matched.length)
    .slice(0, 6)
    .map((item) => ({
      name: item.recipe.name,
      note:
        item.missing.length === 0
          ? `${item.recipe.description} Tum temel malzemeler sende var.`
          : `${item.recipe.description} Eksik kalabilecekler: ${item.missing
              .slice(0, 3)
              .join(", ")}.`,
      matched: item.matched,
      missing: item.missing,
      percentage: Math.min(100, Math.max(25, Math.round(item.score * 100))),
    }));

  return {
    knownIngredients,
    unknownIngredients,
    ranked,
    notEnoughKnownIngredients: false,
  };
}

function createRecipeCard(item) {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const top = document.createElement("div");
  top.className = "recipe-top";
  top.appendChild(createTextElement("h3", "", item.name));
  top.appendChild(
    createTextElement("span", "match-badge", `Uyum %${item.percentage}`)
  );

  card.appendChild(top);
  card.appendChild(createTextElement("p", "", item.note));
  card.appendChild(createChipRow(item.matched));

  if (item.missing.length > 0) {
    card.appendChild(
      createTextElement("p", "missing-title", "Eksik olabilecek malzemeler")
    );
    card.appendChild(createChipRow(item.missing.slice(0, 4)));
  }

  return card;
}

function renderSuggestions(data) {
  clearResults();
  emptyState.hidden = true;

  if (data.unknownIngredients.length > 0) {
    renderNote(
      `Su malzemeler arsivde tanimli degil: ${data.unknownIngredients.join(
        ", "
      )}. Diger malzemelere gore en uygun tarifleri listeledik.`
    );
  } else {
    renderNote(
      `${recipeLibrary.length} tariflik arsivden sana en uygun ${
        data.ranked.length
      } oneriyi gosterdik.`
    );
  }

  data.ranked.forEach((item) => {
    results.appendChild(createRecipeCard(item));
  });
}

function renderNoMatchMessage(message) {
  clearResults();
  emptyState.hidden = false;
  emptyState.innerHTML = `<p>${message}</p>`;
}

function handleSuggest() {
  const userIngredients = parseIngredients(ingredientsInput.value);

  if (userIngredients.length === 0) {
    renderNoMatchMessage("Once en az bir malzeme yazman gerekiyor.");
    return;
  }

  const suggestionData = getSuggestions(userIngredients);

  if (suggestionData.knownIngredients.length === 0) {
    renderNoMatchMessage(
      "Girdigin malzemeler arsivde bulunmuyor. Asagidaki 100 malzemeden birkacini deneyebilirsin."
    );
    return;
  }

  if (suggestionData.notEnoughKnownIngredients) {
    renderNoMatchMessage(
      "Daha dogru sonuc icin arsivde bulunan en az 2 malzeme secmelisin."
    );
    return;
  }

  if (suggestionData.ranked.length === 0) {
    renderNoMatchMessage(
      "Bu malzemelerle yeterince guclu bir tarif eslesmesi bulamadik. Birbirine daha yakin 1-2 malzeme daha ekleyip tekrar deneyebilirsin."
    );
    return;
  }

  renderSuggestions(suggestionData);
}

function resetApp() {
  ingredientsInput.value = "";
  clearResults();
  emptyState.hidden = false;
  emptyState.innerHTML = "<p>Malzemelerini gir ve butona bas.</p>";
  syncIngredientPills();
}

function toggleIngredient(ingredient) {
  const selectedIngredients = getSelectedIngredients();
  const nextIngredients = selectedIngredients.includes(ingredient)
    ? selectedIngredients.filter((item) => item !== ingredient)
    : [...selectedIngredients, ingredient];

  setIngredientsInputValue(nextIngredients);
  syncIngredientPills();
  ingredientsInput.focus();
}

function renderIngredientCatalog() {
  ingredientCatalogElement.innerHTML = "";

  [...ingredientCatalog]
    .sort((a, b) => a.localeCompare(b, "tr"))
    .forEach((ingredient) => {
      const button = createTextElement("button", "ingredient-pill", ingredient);
      button.type = "button";
      button.dataset.ingredient = ingredient;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        toggleIngredient(ingredient);
      });
      ingredientCatalogElement.appendChild(button);
    });

  recipeCountElement.textContent = recipeLibrary.length;
  ingredientCountElement.textContent = ingredientCatalog.length;
  syncIngredientPills();
}

sampleTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    ingredientsInput.value = tag.dataset.fill;
    syncIngredientPills();
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

ingredientsInput.addEventListener("input", syncIngredientPills);

renderIngredientCatalog();
