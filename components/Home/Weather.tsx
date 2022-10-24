import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import useTypedSelector from '../../src/hooks/typedSelector';

const Weather: FC = () => {
  const { dayWeatherData } = useTypedSelector((state) => state.dayWeatherData);

  const temp = Math.round(Number(dayWeatherData?.main.temp));
  return (
    <View style={weatherStyles.container}>
      <View style={weatherStyles.logoContainer}>
        <Image
          style={weatherStyles.logo}
          source={{
            uri: `http://openweathermap.org/img/wn/${dayWeatherData?.weather[0].icon}@2x.png`,
          }}
        />
        <Text style={weatherStyles.weather}>
          It's {dayWeatherData?.weather[0].main}
        </Text>
      </View>
      <View style={weatherStyles.degreeWraper}>
        <Text style={weatherStyles.degrees}>{temp}</Text>
        <Octicons
          style={weatherStyles.dot}
          name='dot'
          size={32}
          color='white'
        />
      </View>
    </View>
  );
};

export const weatherStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
