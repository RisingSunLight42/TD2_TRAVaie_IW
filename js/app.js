const nameCity = document.getElementById("nameCity");
const minTemperature = document.getElementById("minTemperature");
const maxTemperature = document.getElementById("maxTemperature");
const rainProbability = document.getElementById("rainProbability");
const sunHours = document.getElementById("sunHours");

function getMeteo(communityCode) {
    const METEO_CONCEPT_API_URL =
        `https://api.meteo-concept.com/api/forecast/daily/0?token=ba636252d01c0123b3498700ea2041a004c84fcf855e0695651e83c954dd33f7&insee=${communityCode}`;

    fetch(METEO_CONCEPT_API_URL)
        .then(response => response.json()).then(data => displayMeteoInfo(data));
}

function displayMeteoInfo(data) {
    nameCity.textContent = data.city.name;
    minTemperature.textContent = data.forecast.tmin + "°C";
    maxTemperature.textContent = data.forecast.tmax + "°C";
    rainProbability.textContent = data.forecast.probarain + "%";
    sunHours.textContent = data.forecast.sun_hours;
}

const FORM_BUTTON = document.getElementById("formButton");
const COMMUNITY_CODE_INPUT = document.getElementById("communityCode");
const SELECT_COMMUNITY = document.getElementById("selectCommunity");

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

FORM_BUTTON.addEventListener("click", () => {});
