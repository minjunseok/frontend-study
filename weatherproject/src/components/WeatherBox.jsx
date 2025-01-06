import { getWeatherDescription } from "../utils/weatherTranslate";


const WeatherBox = ( {weather , airPollution} ) => {

  console.log("weather",weather);
  console.log("airPollution",airPollution);

  if(!weather) {

    return <div className="weather-box">조금만 기다려주세요!</div>;
  }

  //받아온 섭씨 온도 

  const celsius = weather.main.temp;

  //섭씨 온도를 화씨로 계산
  const fahrenheit = (celsius * 1.8 + 32).toFixed(1);

  const weatherDescription = getWeatherDescription(weather.weather[0].main);
  
  return (

    <div className="weather-box">
      <div>{weather?.name}</div>

      {celsius !== null && (
        <h1>
          {celsius}°C / {fahrenheit}°F
        </h1>
      )}
        
      <h4>날씨 : {weatherDescription}</h4>
      <h4>습도 : {weather.main.humidity}%</h4>
    </div>

  );
};

export default WeatherBox
