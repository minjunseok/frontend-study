import { Button } from "react-bootstrap";

const WeatherButton = ({cities,setCity,fetchWeatherAndAirPollution}) => {



  return (
    <div>
      <Button variant="secondary"
        onClick={fetchWeatherAndAirPollution}>
          현재 위치
          </Button>

        {cities.map((item, index) => (
          <Button
            variant="secondary"
            key={index}
            onClick={()=>setCity(item)}
           >
            {item}
          </Button>
        ))}
       
    </div>
  );
};

export default WeatherButton
