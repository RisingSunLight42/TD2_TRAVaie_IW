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