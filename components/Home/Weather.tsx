import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import useTypedSelector from '../../src/hooks/typedSelector';
import WeatherInfo from './WeatherInfo';

const Weather: FC = () => {
  const {
    dayWeatherData: { dayWeatherData },
    loaderSlice: { loader },
  } = useTypedSelector((state) => state);

  const temp = Math.round(Number(dayWeatherData?.main.temp));
  return (
    <View style={weatherStyles.container}>
      <View style={weatherStyles.infoWrapper}>
        <View style={weatherStyles.logoContainer}>
          <Image
            style={weatherStyles.logo}
            source={{
              uri: `http://openweathermap.org/img/wn/${dayWeatherData?.weather[0].icon}@2x.png`,
            }}
          />
          <Text style={weatherStyles.weather}>
            {loader ? 'Loading...' : `It's ${dayWeatherData?.weather[0].main}`}
          </Text>
        </View>
        <View style={weatherStyles.degreeWraper}>
          <Text style={weatherStyles.degrees}>{loader ? '0' : temp}</Text>
          <Octicons
            style={weatherStyles.dot}
            name='dot'
            size={32}
            color='white'
          />
        </View>
      </View>
      <WeatherInfo />
    </View>
  );
};

export const weatherStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25,
  },
  weather: {
    fontSize: 25,
    color: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  degreeWraper: {
    position: 'relative',
    width: '50%',
  },
  degrees: {
    fontSize: 75,
    color: 'white',
    opacity: 0.8,
    textAlign: 'right',
  },
  dot: {
    opacity: 0.8,
    position: 'absolute',
    top: -3,
    end: -8,
  },
  logo: {
    width: 130,
    height: 60,
  },
});

export default Weather;
