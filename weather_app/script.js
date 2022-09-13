const KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const search_button = document.querySelector("#search_button");
const search_bar = document.querySelector("#search_bar");
const weather_data = document.querySelector("#weather_data");

const getWeatherData = async (city) => {
  weather_data.innerHTML = `<h4>Loading...</h4>`;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;
  const response = await fetch(API);
  if (response.status > 300) {
    alert(
      "city you entered does not exist (or) please check the charecters and enter again properly"
    );
    return;
  }
  const my_data = await response.json();
  console.log(my_data);
  displayWeatherData(my_data);
};

const displayWeatherData = (my_data) => {
  weather_data.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${my_data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${my_data.main.temp}&#176;C</h2>
                <h4>${my_data.weather[0].main}</h4>
            </div>
   `;
};

search_button.addEventListener("click", () => {
  if (search_bar.value == "") {
    alert("PLEASE ENTER YOUR CITY");
    return;
  }
  getWeatherData(search_bar.value);
  search_bar.value = "";
});
