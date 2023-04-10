import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

const weatherIcon = {
  "01": <FaSun size={96} />,
  "02": <FaCloudSun size={96} />,
  "03": <FaCloud size={96} />,
  "04": <FaCloudMeatball size={96} />,
  "09": <FaCloudSunRain size={96} />,
  10: <FaCloudShowersHeavy size={96} />,
  11: <FaPooStorm size={96} />,
  13: <FaSnowflake size={96} />,
  50: <FaSmog size={96} />,
};

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [weatherInfo, setWeatherInfo] = useState();

  const getGeolocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        alert("위치정보에 동의해라");
      }
    );
  };
  const getWeatherInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      );
      console.log(response.data);
      setWeatherInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGeolocation();
  });
  useEffect(() => {
    if (!lat || !lon) return;
    getWeatherInfo();
  }, [lat, lon]);
  useEffect(() => console.log(lat), [lat]);
  useEffect(() => console.log(lon), [lon]);
  useEffect(() => console.log(process.env.REACT_APP_WEATHER_API), []);
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {weatherInfo ? (
        <div className="flex flex-col justify-center items-center">
          {weatherIcon[weatherInfo.weather[0].icon.substring(0, 2)]}
        </div>
      ) : (
        "날씨정보로딩중"
      )}
    </div>
  );
}

export default App;
