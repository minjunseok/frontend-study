
import { useEffect , useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {

      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치" , lat , lon );
      getWeatherByCurrentLocation(lat,lon);

    });
  };

  // 유의점 1. await을 사용하기 위해 async를 붙여준다 
  // 유의점 2. api 사용을 위해 보통은 json 데이터를 추출해야한다.
  const getWeatherByCurrentLocation = async (lat, lon) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73c10d78497ac8346d911fea8f5418d6`;
    
    let response = await fetch(url); // 데이터를 갖고올 때 까지 기다려야하므로 await를 붙임
    let data = await response.json();  // 비동기적 처리 사용을 위한 await 
    console.log(data);
  };



  useEffect(() => {
    getCurrentLocation();
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
        <WeatherBox />
        <WeatherButton />
        <Footer />
      </div>
     

    </div>
  )
}

export default App
