const FORM_POSTAL_CODE = document.getElementById("fPostalCode").value;
const FORM_TOWN = document.getElementById("fTown").value;
let formButton = document.getElementById("fButton");

formButton.addEventListener('click', () => {
    document.forms.formWeather.submit()
})