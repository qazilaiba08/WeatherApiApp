import React from "react";
import axios from "axios";
// import WeatherCard from "./WeatherCard";
import { Card } from "react-bootstrap";
import { FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";
import { Button, Form, Container } from "react-bootstrap";

const Weather = () => {
  const userCityRef = React.useRef(null);
  const [weather, setWeather] = React.useState(null); // Updated to store a single object

  const getCityName = async (event) => {
    event.preventDefault();

    let cityName = userCityRef.current.value;
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=3d89dac70d43451ba9b202407251401&q=${cityName}&aqi=no`
      );

      setWeather(response.data); // Store the single weather object
    } catch (e) {
      console.log(e);
      setWeather(null); // Reset weather data on error
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={getCityName} className="d-flex gap-3 align-items-center">
        <Form.Control
          type="text"
          placeholder="Enter City Name"
          ref={userCityRef}
          className="flex-grow-1"
        />
        <Button variant="dark" type="submit">
          Get Weather
        </Button>
      </Form>
      <div className="mt-4">
        {weather ? (
          // <WeatherCard weather={weather} />
          <Card className="mb-4">
          <Card.Body>
            <Card.Title>
              {weather.location.name}, {weather.location.country}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {weather.location.localtime}
            </Card.Subtitle>
            <Card.Text>
            <div className="d-flex align-items-center gap-3">
                  <img
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                    title={weather.current.condition.text}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <strong>Condition:{weather.current.condition.text}</strong>
                </div>
              <div className="d-flex gap-3 mt-2">
                <div>
                  <FaTemperatureHigh /> <strong>Temp:</strong> {weather.current.temp_c}°C
                </div>
                <div>
                  <FaWind /> <strong>Wind:</strong> {weather.current.wind_kph} kph
                </div>
                <div>
                  <FaTint /> <strong>Humidity:</strong> {weather.current.humidity}%
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        ) : (
          <p className="text-muted">No data found. Try searching for a city.</p>
        )}
      </div>
     

     <br />
     <br />
     <footer style={{textAlign:'center'}}>
     Weather App © 2025
     Powered by WeatherAPI 
     </footer>
    </Container>
  );
};

export default Weather;
