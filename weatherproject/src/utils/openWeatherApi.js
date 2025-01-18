

// 위도 경도 데이터 모듈함수

export const getCurrentLocation = async () => {

  
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by your browser.");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("현재 위치", lat, lon);
        resolve({ lat, lon }); // 위치 데이터를 반환
      },
      (error) => {
        reject(error);
      }
    );
  });
};


// 미세먼지 측정 관련 모듈함수

export const getLocationAirPollution = async (lat, lon) => {


    console.log("미세먼지 함수 실행!");

    let url2 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=73c10d78497ac8346d911fea8f5418d6`;

    try {

      let response = await fetch(url2);
      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);


      }

      let data = await response.json();
      console.log("미세먼지 데이터:", data); // API 응답 확인
      
      return(data);

    } catch (error) {

      console.error("API 호출 중 에러 발생:", error);
      throw error; 

    };
  };




    // 유의점 1. await을 사용하기 위해 async를 붙여준다 
    // 유의점 2. api 사용을 위해 보통은 json 데이터를 추출해야한다.

    export const getWeatherByCurrentLocation = async (lat, lon) => {
  
      console.log("날씨 측정 함수 실행!");
  
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73c10d78497ac8346d911fea8f5418d6&units=metric`;
      
      try {
        let response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        let data = await response.json();
        console.log("날씨 데이터:", data); // API 응답 확인
        return data; // 상태 변경 대신 데이터를 반환

      } catch (error) {

        console.error("API 호출 중 에러 발생:", error);
        throw error; // 호출 측에서 에러를 처리하도록 전달

      }

    };





 