import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  loader: boolean;
}

const initialState: IInitialState = {
  loader: true,
};

export const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const loaderSliceAction = loaderSlice.actions;
export const loaderSliceReducer = loaderSlice.reducer;
