import React, { FC, useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Search from '../../components/Home/Search';
import Weather from '../../components/Home/Weather';
import { getCurrentWeather } from '../../src/api/weatherApi';
import useActions from '../../src/hooks/actions';

const Home: FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { getDayWeather } = useActions();
  const [city, setCity] = useState('Pavlohrad');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCurrentWeather(city);
        dispatch(getDayWeather(data));
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[homeStyles.container, homeStyles.safeArea]}>
      <ImageBackground
        style={homeStyles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        }}
      >
        <View>
          <Header navigation={navigation} />
          <Weather />
          <Search />
        </View>
      </ImageBackground>
      <Footer />
    </SafeAreaView>
  );
};

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Home;
