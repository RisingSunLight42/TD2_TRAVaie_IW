const CITY_NAME = document.getElementById("nameCity");
const MINIMAL_TEMPERATURE = document.getElementById("minTemperature");
const MAXIMAL_TEMPERATURE = document.getElementById("maxTemperature");
const RAIN_PROBABILITY = document.getElementById("rainProbability");
const SUN_HOURS = document.getElementById("sunHours");
const FORM_BUTTON = document.getElementById("formButton");
const COMMUNITY_CODE_INPUT = document.getElementById("communityCode");
const SELECT_COMMUNITY = document.getElementById("selectCommunity");
const BACKGROUND = document.getElementById("background");
const WEATHER_CODES = {
    0: "./image/snowy.webp",
    1: "./image/cloudy.webp",
    2: "./image/cloudy.webp",
    3: "./image/cloudy.webp",
    4: "./image/cloudy.webp",
    5: "./image/cloudy.webp",
    6: "./image/cloudy.webp",
    7: "./image/snowy.webp",
    10: "./image/rainy.webp",
    11: "./image/rainy.webp",
    12: "./image/rainy.webp",
    13: "./image/rainy.webp",
    14: "./image/rainy.webp",
    15: "./image/rainy.webp",
    16: "./image/rainy.webp",
    20: "./image/snowy.webp",
    21: "./image/snowy.webp",
    22: "./image/snowy.webp",
    30: "./image/snowy.webp",
    31: "./image/snowy.webp",
    32: "./image/snowy.webp",
    40: "./image/rainy.webp",
    41: "./image/rainy.webp",
    42: "./image/rainy.webp",
    43: "./image/rainy.webp",
    44: "./image/rainy.webp",
    45: "./image/rainy.webp",
    46: "./image/rainy.webp",
    47: "./image/rainy.webp",
    48: "./image/rainy.webp",
    60: "./image/snowy.webp",
    61: "./image/snowy.webp",
    62: "./image/snowy.webp",
    63: "./image/snowy.webp",
    64: "./image/snowy.webp",
    65: "./image/snowy.webp",
    66: "./image/snowy.webp",
    67: "./image/snowy.webp",
    68: "./image/snowy.webp",
    70: "./image/rainy.webp",
    71: "./image/rainy.webp",
    72: "./image/rainy.webp",
    73: "./image/rainy.webp",
    74: "./image/rainy.webp",
    75: "./image/rainy.webp",
    76: "./image/rainy.webp",
    77: "./image/rainy.webp",
    78: "./image/rainy.webp",
    100: "./image/stormy.webp",
    101: "./image/stormy.webp",
    102: "./image/stormy.webp",
    103: "./image/stormy.webp",
    104: "./image/stormy.webp",
    105: "./image/stormy.webp",
    106: "./image/stormy.webp",
    107: "./image/stormy.webp",
    108: "./image/stormy.webp",
    120: "./image/stormy.webp",
    121: "./image/stormy.webp",
    122: "./image/stormy.webp",
    123: "./image/stormy.webp",
    124: "./image/stormy.webp",
    125: "./image/stormy.webp",
    126: "./image/stormy.webp",
    127: "./image/stormy.webp",
    128: "./image/stormy.webp",
    130: "./image/stormy.webp",
    131: "./image/stormy.webp",
    132: "./image/stormy.webp",
    133: "./image/stormy.webp",
    134: "./image/stormy.webp",
    135: "./image/stormy.webp",
    136: "./image/stormy.webp",
    137: "./image/stormy.webp",
    138: "./image/stormy.webp",
    140: "./image/stormy.webp",
    141: "./image/stormy.webp",
    142: "./image/snowy.webp",
    210: "./image/rainy.webp",
    211: "./image/rainy.webp",
    212: "./image/rainy.webp",
    220: "./image/snowy.webp",
    221: "./image/snowy.webp",
    222: "./image/snowy.webp",
    230: "./image/snowy.webp",
    231: "./image/snowy.webp",
    232: "./image/snowy.webp",
    235: "./image/rainy.webp",
};

function getMeteo(communityCode) {
    const METEO_CONCEPT_API_URL = `https://api.meteo-concept.com/api/forecast/daily/0?token=ba636252d01c0123b3498700ea2041a004c84fcf855e0695651e83c954dd33f7&insee=${communityCode}`;

    fetch(METEO_CONCEPT_API_URL)
        .then((response) => response.json())
        .then((data) => displayMeteoInfo(data));
}

function displayMeteoInfo(data) {
    CITY_NAME.textContent = "Weather card of " + data.city.name;
    MINIMAL_TEMPERATURE.textContent = data.forecast.tmin + "°C";
    MAXIMAL_TEMPERATURE.textContent = data.forecast.tmax + "°C";
    RAIN_PROBABILITY.textContent = data.forecast.probarain + "%";
    SUN_HOURS.textContent = data.forecast.sun_hours;
    BACKGROUND.style.backgroundImage = `url(${
        WEATHER_CODES[data.forecast.weather]
    })`;
}

const isCommunityCodeValid = () => {
    const COMMUNITY_CODE = COMMUNITY_CODE_INPUT.value;
    if (COMMUNITY_CODE.length != 5) return;
    getCommunityList(COMMUNITY_CODE);
};

const getCommunityList = (communityCode) => {
    try {
        const COMMUNITY_LIST = fetch(
            `https://geo.api.gouv.fr/communes?codePostal=${communityCode}`
        )
            .then((API_COMMUNITY_RESPONSE) => API_COMMUNITY_RESPONSE.json())
            .then((data) =>
                data.map((community) => [community.nom, community.code])
            )
            .then((list) => displayCommunity(list));
        return COMMUNITY_LIST;
    } catch (error) {
        console.error("Erreur lors de la requête API :\n", error);
    }
};

const displayCommunity = (communityList) => {
    while (SELECT_COMMUNITY.length != 0) SELECT_COMMUNITY.remove(0);
    const DEFAULT_OPTION = document.createElement("option");
    DEFAULT_OPTION.text = "--Please choose your town--";
    DEFAULT_OPTION.value = "";
    SELECT_COMMUNITY.add(DEFAULT_OPTION);
    for (const community of communityList) {
        const OPTION = document.createElement("option");
        OPTION.text = community[0];
        OPTION.value = community[1];
        SELECT_COMMUNITY.add(OPTION);
    }
};

COMMUNITY_CODE_INPUT.addEventListener("input", () => isCommunityCodeValid());

FORM_BUTTON.addEventListener("click", () => {
    if (SELECT_COMMUNITY.value != "") getMeteo(SELECT_COMMUNITY.value);
});
