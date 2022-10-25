import React, { FC, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { View } from 'react-native';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import ImageBgc from '../../components/Home/ImgBackground';
import Search from '../../components/Home/Search';
import Weather from '../../components/Home/Weather';
import { useFetchData } from '../../src/hooks/useFetchData';

const Home: FC = ({ navigation }: any) => {
  const { fetchData, refresh } = useFetchData();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[homeStyles.container, homeStyles.safeArea]}>
      <ScrollView
        contentContainerStyle={homeStyles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={fetchData} />
        }
      >
        <ImageBgc
          children={
            <View>
              <Header />
              <Weather />
            </View>
          }
        />
      </ScrollView>
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
  scrollView: {
    height: '100%',
  },
});

export default Home;
