import { configureStore } from '@reduxjs/toolkit';
import { hourlyWeatherReducer } from './slices/hourlyWeather';
import { dayWeatherDataReducer } from './slices/weatherData';

const store = configureStore({
  reducer: {
    dayWeatherData: dayWeatherDataReducer,
    hourlyWeather: hourlyWeatherReducer,
  },
});

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
