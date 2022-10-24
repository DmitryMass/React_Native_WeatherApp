import React, { FC, useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { getHourlyWeather } from '../../src/api/weatherApi';
import useActions from '../../src/hooks/actions';
import useTypedSelector from '../../src/hooks/typedSelector';
import { transformString } from '../../src/secondaryFunc/stringTransform';

const Footer: FC = () => {
  const dispatch = useDispatch();
  const { saveHourlyWeather } = useActions();
  const { hourlyWeather } = useTypedSelector((state) => state.hourlyWeather);

  useEffect(() => {
    async function fetchHourlyWeather() {
      try {
        const data = await getHourlyWeather('Pavlohrad', '4');
        dispatch(saveHourlyWeather(data));
      } catch (e) {
        console.log(e);
      }
    }
    fetchHourlyWeather();
  }, []);

  return (
    <View style={footerStyles.footer}>
      <FlatList
        contentContainerStyle={footerStyles.wrapper}
        data={hourlyWeather?.list}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.dt_txt} style={footerStyles.hourWeather}>
            <Text style={footerStyles.time}>{item.dt_txt.slice(10, 16)}</Text>
            <Image
              style={footerStyles.logo}
              source={{
                uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              }}
            />
            <Text>{transformString(item.weather[0].description)}</Text>
            <View style={footerStyles.tempContainer}>
              <Text style={footerStyles.temp}>
                {Math.round(Number(item.main.temp))} C
              </Text>
              <Text style={footerStyles.unicode}>{'\u25E6'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const footerStyles = StyleSheet.create({
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    start: -5,
    width: '103%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hourWeather: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 60,
  },
  time: {
    fontWeight: 'bold',
  },
  tempContainer: {
    flexDirection: 'row',
  },
  temp: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  unicode: {
    marginTop: -6,
    marginLeft: 2,
    fontSize: 20,
  },
});
export default Footer;
