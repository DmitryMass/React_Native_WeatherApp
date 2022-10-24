import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Menu from '../screens/Menu/Menu';

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  WeatherItem: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Menu'
          component={Menu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
