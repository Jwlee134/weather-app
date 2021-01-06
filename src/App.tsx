import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import axios from 'axios';
import {API_KEY} from '@env';
import Weather from './Weather';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemp] = useState(0);
  const [condition, setCondition] = useState('');

  const getWeather = async (lat: number, lon: number) => {
    const {
      data: {
        main: {temp},
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    setTemp(temp);
    setCondition(weather[0].main);
    setLoading(false);
  };

  const getCoords = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: {latitude, longitude},
        } = position;
        getWeather(latitude, longitude);
      },
      () => Alert.alert('경고', '위치를 가져올 수 없습니다.'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(getCoords, []);

  return loading ? (
    <Loader />
  ) : (
    <Weather temp={Math.round(temperature)} condition={condition} />
  );
};

export default App;
