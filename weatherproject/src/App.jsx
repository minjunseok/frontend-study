
import { useEffect , useState } from 'react'

import { getLocationAirPollution ,
         getWeatherByCurrentLocation,
         getCurrentLocation } from './utils/openWeatherApi';

import Header from './components/Header';
import Footer from './components/Footer';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {


  const [weather,setWeather] = useState(null);
  const [airPollution,setAirPollution] = useState(null);

  
  const fetchWeatherAndAirPollution = async () => {
    try {
      const { lat, lon } = await getCurrentLocation(); // 위치 정보 가져오기
      console.log("가져온 위치", lat, lon);

      const weatherData = await getWeatherByCurrentLocation(lat, lon);
      setWeather(weatherData);

      const airPollutionData = await getLocationAirPollution(lat, lon);
      setAirPollution(airPollutionData);

    } catch (error) {
      console.error("데이터를 가져오는 중 에러 발생:", error);
    }
  };






  useEffect(() => {
    fetchWeatherAndAirPollution();
  },[]);

  // 1. 앱이 실행될 때 현재 위치기반의 날씨가 보임
  // 2. 날씨정보에는 도시, 섭씨, 화씨 날씨정보가
  // 3. 5개의 버튼이 있다(1개는 현재위치 , 4개는 다른 도시)
  // 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 보인다.
  // 5. 현재위치 버튼을 누르면 다시 현재위치 기반으로 돌아온다.
  // 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.


  return (
    <div>

      <div className="container">
        <Header />
        <WeatherBox
          weather={weather}
          airPollution={airPollution}
        />
        <WeatherButton />
        <Footer />
      </div>
     

    </div>
  )
}

export default App
