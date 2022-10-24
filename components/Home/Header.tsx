import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTypedSelector from '../../src/hooks/typedSelector';

interface IHeaderProps {
  navigation: any;
}

const Header: FC<IHeaderProps> = ({ navigation }) => {
  const { dayWeatherData } = useTypedSelector((state) => state.dayWeatherData);
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.geolocation}>
        <Ionicons
          name='location'
          size={32}
          color='white'
          style={headerStyles.geoIcon}
        />
        <Text style={headerStyles.city}>{dayWeatherData?.name}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <AntDesign name='menufold' size={28} color='white' />
      </TouchableOpacity>
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
