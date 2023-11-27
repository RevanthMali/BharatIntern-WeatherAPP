const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "Your API_KEY",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = async (city)=>{
  const url1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';
  const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
  const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tamil Nadu';
  const url4 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kerala';

 cityName.innerHTML = city;
try {
  await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => { 
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_degrees;
      wind_degrees.innerHTML = response.wind_degrees; 
      const gmtTimestamp1 = response.sunrise;
      const gmtTimestamp2 = response.sunset;
      const timeZone = 'Asia/Kolkata';
      const gmtDate1 = new Date(gmtTimestamp1 * 1000);
      const gmtDate2 = new Date(gmtTimestamp2 * 1000);
      const formattedTimeInIST1 = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      }).format(gmtDate1); 
      const formattedTimeInIST2 = new Intl.DateTimeFormat('en-US', {
        timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        }).format(gmtDate2);  
      sunrise.innerHTML = formattedTimeInIST1;
      sunset.innerHTML = formattedTimeInIST2;
      return fetch(url1,options)
    }).then((response=> response.json()))
    .then((response)=>{
          temp1.innerHTML = response.temp;
          min_temp1.innerHTML = response.min_temp;
          max_temp1.innerHTML = response.max_temp;
          feels_like1.innerHTML = response.feels_like;
          humidity1.innerHTML = response.humidity;
          wind_speed1.innerHTML = response.wind_speed;
          wind_degrees1.innerHTML = response.wind_degrees;
          sunrise1.innerHTML = response.sunrise;
          sunset1.innerHTML = response.sunset;
          return fetch(url2,options)
    }).then((response=> response.json()))
    .then((response)=>{
          temp3.innerHTML = response.temp;
          min_temp3.innerHTML = response.min_temp;
          max_temp3.innerHTML = response.max_temp;
          feels_like3.innerHTML = response.feels_like;
          humidity3.innerHTML = response.humidity;
          wind_speed3.innerHTML = response.wind_speed;
          wind_degrees3.innerHTML = response.wind_degrees;
          sunrise3.innerHTML = response.sunrise;
          sunset3.innerHTML = response.sunset;
          return fetch(url3,options)
    }).then((response=> response.json()))
    .then((response)=>{
          temp4.innerHTML = response.temp;
          min_temp4.innerHTML = response.min_temp;
          max_temp4.innerHTML = response.max_temp;
          feels_like4.innerHTML = response.feels_like;
          humidity4.innerHTML = response.humidity;
          wind_speed4.innerHTML = response.wind_speed;
          wind_degrees4.innerHTML = response.wind_degrees;
          sunrise4.innerHTML = response.sunrise;
          sunset4.innerHTML = response.sunset;
          return fetch(url4,options)
    }).then((response=> response.json()))
    .then((response)=>{
          temp5.innerHTML = response.temp;
          min_temp5.innerHTML = response.min_temp;
          max_temp5.innerHTML = response.max_temp;
          feels_like5.innerHTML = response.feels_like;
          humidity5.innerHTML = response.humidity;
          wind_speed5.innerHTML = response.wind_speed;
          wind_degrees5.innerHTML = response.wind_degrees;
          sunrise5.innerHTML = response.sunrise;
          sunset5.innerHTML = response.sunset;
    })
} catch (error) {
  console.error(error);
}
} 
submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})