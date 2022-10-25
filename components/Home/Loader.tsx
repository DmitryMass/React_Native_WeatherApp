import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loader: FC = () => {
  return (
    <View>
      <Text style={loaderStyles.loader}>Loading...</Text>
    </View>
  );
};

const loaderStyles = StyleSheet.create({
  loader: {
    color: 'white',
  },
});

export default Loader;
