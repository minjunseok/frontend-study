


const weatherDescKo = {
  Clear: [1, "매우 맑아요!☀️"],
  Clouds: [2, "구름이 살짝 있어요!☁️"],
  Atmosphere: [3, "약간 흐려요!🥲"],
  Drizzle: [4, "비가 약간 내려요☔️"], 
  Rain: [5, "비가 많이 내려요!🌧️"],
  Thunderstorm: [5, "비가 많이 내려요!🌧️"],
  Snow: [6, "눈이 내려요!☃️"],
};

export const getWeatherDescription = (id) => {
  const description = weatherDescKo[id];
  return description || [0, "알 수 없는 날씨 상태"];
};