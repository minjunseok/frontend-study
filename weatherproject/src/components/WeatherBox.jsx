import { imageSelector } from "../utils/imageSelector";
import { getWeatherDescription } from "../utils/weatherTranslate";
import { dustLevel } from "../utils/dustLevel";



const WeatherBox = ( {weather , airPollution, city} ) => {



  if(!weather) {

    return <div className="weather-box">조금만 기다려주세요!</div>;
  }

  //받아온 섭씨 온도 
  const celsius = weather.main.temp;

  //섭씨 온도를 화씨로 계산
  const fahrenheit = (celsius * 1.8 + 32).toFixed(1);


  //받아온 날씨id, 날씨 문자열
  const [id, description] = getWeatherDescription(weather.weather[0].main);




  // 날씨 이미지 선택
  let weatherImage = imageSelector(id);
  

  
  const pm10 = airPollution?.list[0]?.components?.pm10;
  const pm25 = airPollution?.list[0]?.components?.pm2_5;

  // 미세먼지 농도 측정 함수
  const getDustLevel = (value, criteria) => {
    return criteria.find(({ max }) => value < max)?.level;
  };

   const mise = pm10 ? getDustLevel(pm10, dustLevel.MISE) : null;
   const choMise = pm25 ? getDustLevel(pm25, dustLevel.CHOMISE) : null;
  
  return (

    <div className="weather-box">
      <div>{weather?.name}</div>
       <br></br>

      {celsius !== null && (
        <h1>
          {celsius}°C / {fahrenheit}°F
        </h1>
      
      )}
          <br/>
      <h4>날씨 : {description}</h4>
      <br />
      {weatherImage &&
        <img src = {weatherImage} />
      }
      <br/>
      <br />
      <h4>습도 : {weather.main.humidity}%</h4>
      <br/>
      {mise && choMise ? (
        <h4>미세먼지 : {mise} / 초미세먼지 : {choMise}</h4>
      ) : (
        <h4>미세먼지 데이터를 지원하지 않습니다.</h4>
      )
    }
      <br/>
      
      
    </div>

  );
};

export default WeatherBox
