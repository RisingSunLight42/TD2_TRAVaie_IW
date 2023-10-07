/**
 * Constant declaration
 */
const CITY_NAME = document.getElementById("nameCity");
const TEMPERATURE = document.getElementById("temperature");
const RAIN = document.getElementById("rain");
const SUN_HOURS = document.getElementById("sunHours");
const LATITUDE = document.getElementById("latitude");
const LONGITUDE = document.getElementById("longitude");
const WIND = document.getElementById("wind");
const DATE = document.getElementById("date");
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
const WEATHER_ICON = document.getElementById("weatherIcon");

let dataMeteo;
const WEATHER_CODES = {
    0: ["./image/sunny.webp", "./image/icons/sunny.svg"],
    1: ["./image/a_bit_cloudy.webp", "./image/icons/cloudy-day.svg"],
    2: ["./image/cloudy_sky.webp", "./image/icons/cloudy-day.svg"],
    3: ["./image/cloudy_sun.webp", "./image/icons/cloudy-day.svg"],
    4: ["./image/cloudy.webp", "./image/icons/cloudy.svg"],
    5: ["./image/more_cloudy.webp", "./image/icons/cloudy.svg"],
    6: ["./image/more_cloudy.webp", "./image/icons/cloudy.svg"],
    7: ["./image/fog.webp", "./image/icons/cloudy.svg"],
    10: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    11: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    12: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    13: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    14: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    15: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    16: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    20: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    21: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    22: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    30: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    31: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    32: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    40: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    41: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    42: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    43: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    44: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    45: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    46: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    47: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    48: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    60: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    61: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    62: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    63: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    64: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    65: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    66: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    67: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    68: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    70: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    71: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    72: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    73: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    74: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    75: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    76: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    77: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    78: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    100: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    101: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    102: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    103: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    104: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    105: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    106: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    107: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    108: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    120: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    121: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    122: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    123: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    124: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    125: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    126: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    127: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    128: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    130: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    131: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    132: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    133: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    134: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    135: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    136: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    137: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    138: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    140: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    141: ["./image/stormy.webp", "./image/icons/stormy.svg"],
    142: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    210: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    211: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    212: ["./image/rainy.webp", "./image/icons/rainy.svg"],
    220: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    221: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    222: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    230: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    231: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    232: ["./image/snowy.webp", "./image/icons/snowy.svg"],
    235: ["./image/rainy.webp", "./image/icons/rainy.svg"],
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
    TEMPERATURE.textContent =
        "Temperature : " +
        data.forecast.tmin +
        "°C/" +
        data.forecast.tmax +
        "°C";
    RAIN.textContent = "Precipitation : " + data.forecast.probarain + "%";
    SUN_HOURS.textContent = "Sun : " + data.forecast.sun_hours + "h";

    if (data.forecast.day == 0) {
        let date = new Date();
        DATE.textContent = date.toLocaleDateString();
    }
    BACKGROUND.style.backgroundImage = `url(${
        WEATHER_CODES[data.forecast.weather][0]
    })`;
    WEATHER_ICON.style.display = "";
    WEATHER_ICON.src = WEATHER_CODES[data.forecast.weather][1];
}

/**
 * Function triggered when the latitude checkbox is ticked
 */
const latitudeTicked = () => {
    if (CHECKBOX_LATITUDE.checked) {
        LATITUDE.style.display = "";
        LATITUDE.textContent = "Latitude : " + dataMeteo.forecast.latitude;
    } else {
        LATITUDE.style.display = "none";
    }
};

/**
 * Function triggered when the longitude checkbox is ticked
 */
const longitudeTicked = () => {
    if (CHECKBOX_LONGITUTE.checked) {
        LONGITUDE.style.display = "";
        LONGITUDE.textContent = "Longitude : " + dataMeteo.forecast.longitude;
    } else {
        LONGITUDE.style.display = "none";
    }
};

/**
 * Function triggered when the accumulation checkbox is ticked
 */
const accumulationTicked = () => {
    if (CHECKBOX_ACCUMULATION.checked) {
        RAIN.textContent += ` (${dataMeteo.forecast.rr10 + " mm"})`;
    } else {
        RAIN.textContent =
            "Precipitation : " + dataMeteo.forecast.probarain + "%";
    }
};

/**
 * Function triggered when the medium wind checkbox is ticked
 */
const mediumWindTicked = () => {
    if (CHECKBOX_MEDIUM_WIND.checked) {
        WIND.style.display = "";
        WIND.textContent = "Wind : " + dataMeteo.forecast.wind10m + " km/h";
        if (CHECKBOX_WIND_DIRECTION.checked)
            WIND.textContent += ` (${dataMeteo.forecast.dirwind10m + " °"})`;
    } else if (CHECKBOX_WIND_DIRECTION.checked) {
        WIND.textContent = "Wind : " + dataMeteo.forecast.dirwind10m + " °";
    } else {
        WIND.style.display = "none";
    }
};

/**
 * Function triggered when the wind direction checkbox is ticked
 */
const windDirectionTicked = () => {
    if (CHECKBOX_WIND_DIRECTION.checked) {
        WIND.style.display = "";
        if (CHECKBOX_MEDIUM_WIND.checked)
            WIND.textContent += ` (${dataMeteo.forecast.dirwind10m + " °"})`;
        else
            WIND.textContent = "Wind : " + dataMeteo.forecast.dirwind10m + " °";
    } else if (CHECKBOX_MEDIUM_WIND.checked) {
        WIND.textContent = "Wind : " + dataMeteo.forecast.wind10m + " km/h";
    } else {
        WIND.style.display = "none";
    }
};

CHECKBOX_LATITUDE.addEventListener("input", latitudeTicked);

CHECKBOX_LONGITUTE.addEventListener("input", longitudeTicked);

CHECKBOX_ACCUMULATION.addEventListener("input", accumulationTicked);

CHECKBOX_MEDIUM_WIND.addEventListener("input", mediumWindTicked);

CHECKBOX_WIND_DIRECTION.addEventListener("input", windDirectionTicked);

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
        WIND.style.display = "none";
        WEATHER_ICON.style.display = "none";
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
        latitudeTicked();
        longitudeTicked();
        accumulationTicked();
        mediumWindTicked();
        windDirectionTicked();
    }
});

FORM.addEventListener("submit", (event) => event.preventDefault());

handleUserInputEnability(false);
