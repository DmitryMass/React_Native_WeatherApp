import React, { FC } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import useTypedSelector from '../../src/hooks/typedSelector';
import { transformString } from '../../src/secondaryFunc/stringTransform';
import Loader from './Loader';

const Footer: FC = () => {
  const {
    hourlyWeather: { hourlyWeather },
    loaderSlice: { loader },
  } = useTypedSelector((state) => state);

  return (
    <View style={footerStyles.footer}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={footerStyles.wrapper}
      >
        {hourlyWeather?.list.map((item) => (
          <View key={item.dt_txt} style={footerStyles.hourWeather}>
            {loader ? (
              <Loader />
            ) : (
              <>
                <View>
                  <Text style={footerStyles.time}>
                    {item.dt_txt.slice(10, 16)}
                  </Text>
                </View>
                <View>
                  <Text style={footerStyles.date}>
                    {item.dt_txt.slice(0, 10)}
                  </Text>
                </View>
                <Image
                  style={footerStyles.logo}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                  }}
                />
                <Text style={footerStyles.description}>
                  {transformString(item.weather[0].description)}
                </Text>
                <View style={footerStyles.tempContainer}>
                  <Text style={footerStyles.temp}>
                    {Math.round(Number(item.main.temp))} C
                  </Text>
                  <Text style={footerStyles.unicode}>{'\u25E6'}</Text>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export const footerStyles = StyleSheet.create({
  footer: {
    height: 200,
    paddingHorizontal: 10,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderTopColor: '#007a97',
    borderLeftColor: '#007a97',
    borderRightColor: '#007a97',
    backgroundColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    bottom: 0,
    start: -5,
    width: '103%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hourWeather: {
    justifyContent: 'center',
    width: 95,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 60,
  },
  time: {
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 12,
    marginVertical: 3,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 3,
    color: 'white',
  },
  tempContainer: {
    flexDirection: 'row',
  },
  temp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  unicode: {
    marginTop: -6,
    marginLeft: 2,
    fontSize: 20,
    color: 'white',
  },
});
export default Footer;
