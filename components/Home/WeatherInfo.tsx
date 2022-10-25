import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTypedSelector from '../../src/hooks/typedSelector';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const WeatherInfo: FC = () => {
  const {
    dayWeatherData: { dayWeatherData },
    loaderSlice: { loader },
  } = useTypedSelector((state) => state);

  return (
    <View style={weatherInfoStyles.container}>
      <View style={weatherInfoStyles.humidityWrapper}>
        <Text style={weatherInfoStyles.title}>Humidity</Text>
        <Entypo
          style={weatherInfoStyles.icon}
          name='water'
          size={28}
          color='white'
        />
        <Text style={weatherInfoStyles.subtitle}>
          {loader ? 'Loading...' : `${dayWeatherData?.main.humidity}%`}
        </Text>
      </View>
      <View style={weatherInfoStyles.humidityWrapper}>
        <Text style={weatherInfoStyles.title}>Wind Speed</Text>
        <Ionicons
          style={weatherInfoStyles.icon}
          name='speedometer'
          size={28}
          color='white'
        />
        <Text style={weatherInfoStyles.subtitle}>
          {loader ? 'Loading...' : `${dayWeatherData?.wind.speed} m/s`}
        </Text>
      </View>
    </View>
  );
};

const weatherInfoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  humidityWrapper: {
    borderRadius: 12,
    backgroundColor: '#3b50ff63',
    padding: 20,
    width: 140,
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  icon: {
    marginVertical: 15,
  },
});
export default WeatherInfo;
