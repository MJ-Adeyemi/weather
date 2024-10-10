let text = "";
let showResult = document.getElementById("showhere");
const API_KEY = "7c2190e5d3be1598cce1ea32c34c00a9";
let cityname = document.getElementById("textInput");

async function searchWord() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${API_KEY}`
    );
    const data = await res.json();
    console.log("Data is here: ", data);

    text = `
    <div class="text-green-950 lg:grid lg:justify-center lg:items-center">
      <p class="text-[20px] text-green-950 font-bold">See ${data.name}'s weather today as follows;</p>

      <br>

      <p class="text-[20px]"><span class="font-bold">Description:</span> ${data.weather[0].description}</p>
      <p class="text-[20px]"><span class="font-bold">Temperature:</span> ${data.main.temp}</p>
      <p class="text-[20px]"><span class="font-bold">Humidity:</span> ${data.main.humidity}</p>
      <p class="text-[20px]"><span class="font-bold">Wind speed:</span> ${data.wind.speed}</p>
      <p class="text-[20px]"><span class="font-bold">Clouds:</span> ${data.clouds.all}</p>
    </div>
   `;

    showResult.innerHTML = text;

  } catch (error) {
    console.log(error);
    
  }
}
