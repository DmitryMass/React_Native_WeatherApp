import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  city: string | null;
}

const initialState: IInitialState = {
  city: 'Dnipro',
};

const citySlice = createSlice({
  name: 'citySlice',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const citySliceAction = citySlice.actions;
export const citySliceReducer = citySlice.reducer;
