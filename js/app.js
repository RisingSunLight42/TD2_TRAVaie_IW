/**
 * Constant declaration
 */
const CITY_NAME = document.getElementById("nameCity");
const MINIMAL_TEMPERATURE = document.getElementById("minTemperature");
const MAXIMAL_TEMPERATURE = document.getElementById("maxTemperature");
const RAIN_PROBABILITY = document.getElementById("rainProbability");
const SUN_HOURS = document.getElementById("sunHours");
const LATITUDE = document.getElementById("latitude");
const LONGITUDE = document.getElementById("longitude");
const ACCUMULATION_RAIN = document.getElementById("accumulationRain");
const MEDIUM_WIND = document.getElementById("mediumWind");
const WIND_DIRECTION = document.getElementById("windDirection");
const FORM = document.getElementById("formWeather");
const FORM_BUTTON = document.getElementById("formButton");
const FORM_OPTION = document.getElementById("option");
const CHECKBOX_LATITUDE = document.getElementById("Latitude");
const CHECKBOX_LONGITUTE = document.getElementById("Longitude");
const CHECKBOX_ACCUMULATION = document.getElementById("Accumulation");
const CHECKBOX_MEDIUM_WIND = document.getElementById("Medium-wind");
const CHECKBOX_WIND_DIRECTION = document.getElementById("Wind-direction");
const COMMUNITY_CODE_INPUT = document.getElementById("communityCode");
const LABEL_SELECT_COMMUNITY = document.getElementById("labelSelectCommunity");
const SELECT_COMMUNITY = document.getElementById("selectCommunity");
const BACKGROUND = document.getElementById("background");
const POP_UP_ERROR = document.getElementById("pop-up-error");
let dataMeteo;
const WEATHER_CODES = {
    0: "./image/sunny.webp",
    1: "./image/a_bit_cloudy.webp",
    2: "./image/cloudy_sky.webp",
    3: "./image/cloudy_sun.webp",
    4: "./image/cloudy.webp",
    5: "./image/more_cloudy.webp",
    6: "./image/more_cloudy.webp",
    7: "./image/fog.webp",
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
/**
 * Function to get the weather from the API
 * @param {COMMUNITY_CODE} communityCode -The community code from the form
 */
function getMeteo(communityCode) {
    const METEO_CONCEPT_API_URL = `https://api.meteo-concept.com/api/forecast/daily/0?token=ba636252d01c0123b3498700ea2041a004c84fcf855e0695651e83c954dd33f7&insee=${communityCode}`;
    try {
        fetch(METEO_CONCEPT_API_URL)
            .then((response) => response.json())
            .then((data) => {
                dataMeteo = data;
                displayMeteoInfo(data);
            });
    } catch (error) {
        console.error("Error : Community code invalid.\n", error);
    }
}

/**
 * Function to display the weather's informations
 * @param {Object} data - The data retrieve from the API
 */
function displayMeteoInfo(data) {
    CITY_NAME.textContent = data.city.name;
    MINIMAL_TEMPERATURE.textContent =
        "Minimum temperature : " + data.forecast.tmin + "°C";
    MAXIMAL_TEMPERATURE.textContent =
        "Maximum temperature : " + data.forecast.tmax + "°C";
    RAIN_PROBABILITY.textContent =
        "Chance of precipitation : " + data.forecast.probarain + "%";
    SUN_HOURS.textContent =
        `Sun hour${data.forecast.sun_hours > 1 ? "s" : ""} : ` +
        data.forecast.sun_hours;

    BACKGROUND.style.backgroundImage = `url(${
        WEATHER_CODES[data.forecast.weather]
    })`;
}

let boolLatitude = true;
CHECKBOX_LATITUDE.addEventListener("input", () => {
    if (boolLatitude) {
        LATITUDE.style.display = "";
        LATITUDE.textContent =
            "Decimal latitude : " + dataMeteo.forecast.latitude;
        boolLatitude = false;
    } else {
        LATITUDE.style.display = "none";
        boolLatitude = true;
    }
});

let boolLongitude = true;
CHECKBOX_LONGITUTE.addEventListener("input", () => {
    if (boolLongitude) {
        LONGITUDE.style.display = "";
        LONGITUDE.textContent =
            "Decimal longitude : " + dataMeteo.forecast.longitude;
        boolLongitude = false;
    } else {
        LONGITUDE.style.display = "none";
        boolLongitude = true;
    }
});

let boolRainAccumulation = true;
CHECKBOX_ACCUMULATION.addEventListener("input", () => {
    if (boolRainAccumulation) {
        ACCUMULATION_RAIN.style.display = "";
        ACCUMULATION_RAIN.textContent =
            "Accumulation of rain : " + dataMeteo.forecast.rr10 + " mm";
        boolRainAccumulation = false;
    } else {
        ACCUMULATION_RAIN.style.display = "none";
        boolRainAccumulation = true;
    }
});

let boolMediumWind = true;
CHECKBOX_MEDIUM_WIND.addEventListener("input", () => {
    if (boolMediumWind) {
        MEDIUM_WIND.style.display = "";
        MEDIUM_WIND.textContent =
            "Medium wind : " + dataMeteo.forecast.wind10m + " km/h";
        boolMediumWind = false;
    } else {
        MEDIUM_WIND.style.display = "none";
        boolMediumWind = true;
    }
});

let boolWindDirection = true;
CHECKBOX_WIND_DIRECTION.addEventListener("input", () => {
    if (boolWindDirection) {
        WIND_DIRECTION.style.display = "";
        WIND_DIRECTION.textContent =
            "Wind direction : " + dataMeteo.forecast.dirwind10m + " °";
        boolWindDirection = false;
    } else {
        WIND_DIRECTION.style.display = "none";
        boolWindDirection = true;
    }
});

/**
 * Function to perform an animation on the display
 * @param {HTMLElement} element - The HTML Element who will get animated
 * @param {string} animation - The parameters of the animation
 */
const triggerAnimation = (element, animation) => {
    // The first three lines are present to reset the animation state and reperform it
    element.style.animation = "none";
    element.offsetHeight;
    element.style.animation = null;
    element.style.animation = animation;
};
/**
 * Function to display weather card's information or not
 * @param {boolean} isEnabled
 */
const handleUserInputEnability = (isEnabled) => {
    if (isEnabled) {
        LABEL_SELECT_COMMUNITY.style.display = "";
        SELECT_COMMUNITY.style.display = "";
        FORM_BUTTON.style.display = "";
    } else {
        LABEL_SELECT_COMMUNITY.style.display = "none";
        SELECT_COMMUNITY.style.display = "none";
        FORM_BUTTON.style.display = "none";
        FORM_OPTION.style.display = "none";
        LATITUDE.style.display = "none";
        LONGITUDE.style.display = "none";
        ACCUMULATION_RAIN.style.display = "none";
        MEDIUM_WIND.style.display = "none";
        WIND_DIRECTION.style.display = "none";
    }
};
/**
 * Function to check if the community code is correct
 * @returns handleUserInputEnability - the parameter that will display (or not) the weather card information
 */
const isCommunityCodeValid = () => {
    const COMMUNITY_CODE = COMMUNITY_CODE_INPUT.value;
    const REGEX_TEST = !COMMUNITY_CODE.match(/^([0-9]){5,}$/);
    if (COMMUNITY_CODE.length !== 5) return handleUserInputEnability(false);
    if (REGEX_TEST) {
        triggerAnimation(POP_UP_ERROR, "popupAlert 5s ease");
        return handleUserInputEnability(false);
    }
    getCommunityList(COMMUNITY_CODE);
};
/**
 * Funtion to get the community list from the API
 * @param {COMMUNITY_CODE} communityCode - The community code from the form
 * @returns COMMUNITY_LIST - The list of all the community available from the API who match with the COMMUNITY_CODE
 */
const getCommunityList = (communityCode) => {
    try {
        const COMMUNITY_LIST = fetch(
            `https://geo.api.gouv.fr/communes?codePostal=${communityCode}`,
        )
            .then((API_COMMUNITY_RESPONSE) => API_COMMUNITY_RESPONSE.json())
            .then((data) =>
                data.map((community) => [community.nom, community.code]),
            )
            .then((list) => displayCommunity(list));
        return COMMUNITY_LIST;
    } catch (error) {
        console.error("Erreur lors de la requête API :\n", error);
    }
};
/**
 * Funtion to display the community in relation with the community code
 * @param {COMMUNITY_LIST} communityList - The list of all the community available from the API who match with the COMMUNITY_CODE
 * @returns handleUserInputEnability - the parameter that will display (or not) the weather card information
 */
const displayCommunity = (communityList) => {
    while (SELECT_COMMUNITY.length != 0) SELECT_COMMUNITY.remove(0);
    const DEFAULT_OPTION = document.createElement("option");
    DEFAULT_OPTION.text = "--Please choose your town--";
    DEFAULT_OPTION.value = "";
    SELECT_COMMUNITY.add(DEFAULT_OPTION);
    if (communityList.length === 0) {
        triggerAnimation(POP_UP_ERROR, "popupAlert 5s ease");
        return handleUserInputEnability(false);
    }
    for (const community of communityList) {
        const OPTION = document.createElement("option");
        OPTION.text = community[0];
        OPTION.value = community[1];
        SELECT_COMMUNITY.add(OPTION);
    }
    handleUserInputEnability(true);
};

COMMUNITY_CODE_INPUT.addEventListener("input", () => isCommunityCodeValid());

FORM_BUTTON.addEventListener("click", () => {
    if (SELECT_COMMUNITY.value != "") {
        getMeteo(SELECT_COMMUNITY.value);
        FORM_OPTION.style.display = "";
    }
});

FORM.addEventListener("submit", (event) => event.preventDefault());

handleUserInputEnability(false);
