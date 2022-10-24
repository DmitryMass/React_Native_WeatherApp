import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentWeatherTypes } from '../../src/types/currentWeatherTypes';

interface IInitialState {
  dayWeatherData: ICurrentWeatherTypes | null;
}

const initialState: IInitialState = {
  dayWeatherData: null,
};

const dayWeatherData = createSlice({
  name: 'dayWeatherData',
  initialState,
  reducers: {
    getDayWeather: (state, action: PayloadAction<ICurrentWeatherTypes>) => {
      state.dayWeatherData = action.payload;
    },
  },
});

export const dayWeatherDataActions = dayWeatherData.actions;
export const dayWeatherDataReducer = dayWeatherData.reducer;
