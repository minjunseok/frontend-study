


import './App.css'
import { useEffect , useState } from 'react'
import { getLocationAirPollution,
         getWeatherByCurrentLocation,
         getCurrentLocation,
       } from './utils/openWeatherApi';

import Header from './components/Header';
import Footer from './components/Footer';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GridLoader  } from 'react-spinners';


function App() {



  const override = {
    span: '20px',
    margin : '0 auto',
    marginTop:'220px',
    textAlign : 'center',
    color : '#fff',
    size : '20'
};

  // 도시 정보가 많아질 수도 있으므로 배열로 만들어 props로 전달한다.
  // 다른 곳에서 쓰일 정보들은 따로 모아서 관리해주는게 좋다.

  const cities = [
    `basing` , `tokyo` , `new york`
  ];

  


  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null);
  const [airPollution,setAirPollution] = useState(null);
  const [loading, setLoading] = useState(true);


   const getWeatherByCity = async () => {

    let url = `https://pro.openweathermap.org/data/2.5/weather?q=${city}&appid=73c10d78497ac8346d911fea8f5418d6&units=metric`;

    setLoading(true);
    
    let response = await fetch(url);

    let data = await response.json();
    
    console.log("Data", data);

    setWeather(data);

    setAirPollution(null); // 도시 변경 시 airPollution 초기화
   
    setLoading(false);
  };


  
  const fetchWeatherAndAirPollution = async () => {

    setLoading(true);

    try {
      const { lat, lon } = await getCurrentLocation(); // 위치 정보 가져오기
      console.log("가져온 위치", lat, lon);

      const weatherData = await getWeatherByCurrentLocation(lat, lon);
      setWeather(weatherData);

      const airPollutionData = await getLocationAirPollution(lat, lon);
      setAirPollution(airPollutionData);

      setLoading(false);
    } catch (error) {
      console.error("데이터를 가져오는 중 에러 발생:", error);
    }
  };






  useEffect(() => {
    if(city=="") {

      fetchWeatherAndAirPollution();

    } else {

      getWeatherByCity();
      
     
    }
  
  },[city]);

  // useEffect(() => {
  //   getWeatherByCity();
  // },[city]);


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
        {loading ? (
           <GridLoader 
           color = "#fff"
           loading ={loading}
           cssOverride={override}
           size={25}
           speedMultiplier={0.8}
           margin={5}
           />
        ) : (
          <div className="container">
          <WeatherBox
          weather={weather}
          airPollution={airPollution}
          />
          <WeatherButton
          cities={cities}
          setCity={setCity}
          fetchWeatherAndAirPollution={fetchWeatherAndAirPollution}
          />
          </div>
        )}
        <Footer />
      </div>
     

    </div>
  )
}

export default App
