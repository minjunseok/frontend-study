import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="secondary">현재 위치</Button>
      <Button variant="secondary">한국</Button>
      <Button variant="secondary">일본</Button>
      <Button variant="secondary">중국</Button>
      <Button variant="secondary">미국</Button>
    </div>
  )
}

export default WeatherButton
