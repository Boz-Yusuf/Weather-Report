const apiKey = "78599114ba331c17a00955f6b6ae7699";
let cities = document.querySelector("#cities");
let cityList = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Antalya",
  "Muğla",
  "Bursa",
  "Yalova",
  "Çanakkale",
];

for (let i = 0; i < cityList.length; i++) {
  let city = cityList[i];
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then(
      (json) =>
        (cities.children[i].childNodes[5].innerHTML =
          json.weather[0].description)
    );
  cities.children[i].childNodes[1].innerHTML = cityList[i];
  console.log(cities.children[i].childNodes[5]);
}

function KelToCel(kTemp) {
  return kTemp - 272;
}
