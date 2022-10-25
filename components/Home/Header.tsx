import React, { FC, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import useTypedSelector from '../../src/hooks/typedSelector';
import Search from './Search';

const Header: FC = () => {
  const {
    dayWeatherData: { dayWeatherData },
    loaderSlice: { loader },
  } = useTypedSelector((state) => state);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.geolocation}>
        <Ionicons
          name='location'
          size={32}
          color='white'
          style={headerStyles.geoIcon}
        />
        <Text style={headerStyles.city}>
          {loader ? 'Loading...' : dayWeatherData?.name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <AntDesign name='menufold' size={28} color='white' />
      </TouchableOpacity>
      <Modal animationType='slide' visible={isOpen} transparent={true}>
        <Search isOpen={setIsOpen} />
      </Modal>
    </View>
  );
};

export const headerStyles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  geolocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  geoIcon: {
    marginRight: 5,
    opacity: 0.9,
  },
  city: {
    fontSize: 21,
    color: 'white',
  },
});
export default Header;
