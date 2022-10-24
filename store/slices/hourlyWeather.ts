import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHourlyWeather } from '../../src/types/hourlyWeatherTypes';

interface IInitialState {
  hourlyWeather: IHourlyWeather | null;
}

const initialState: IInitialState = {
  hourlyWeather: null,
};

const hourlyWeather = createSlice({
  name: 'hourlyWeather',
  initialState,
  reducers: {
    saveHourlyWeather: (state, action: PayloadAction<IHourlyWeather>) => {
      state.hourlyWeather = action.payload;
    },
  },
});

export const hourlyWeatherAction = hourlyWeather.actions;
export const hourlyWeatherReducer = hourlyWeather.reducer;
