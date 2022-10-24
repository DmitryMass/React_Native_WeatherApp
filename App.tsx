import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import store from './store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
