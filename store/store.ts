import { configureStore } from '@reduxjs/toolkit';
import { citySliceReducer } from './slices/changeCitySlice';
import { hourlyWeatherReducer } from './slices/hourlyWeather';
import { loaderSliceReducer } from './slices/loaderSlice';
import { dayWeatherDataReducer } from './slices/weatherData';

const store = configureStore({
  reducer: {
    dayWeatherData: dayWeatherDataReducer,
    hourlyWeather: hourlyWeatherReducer,
    loaderSlice: loaderSliceReducer,
    citySlice: citySliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
