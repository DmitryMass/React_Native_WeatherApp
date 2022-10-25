import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { dayWeatherDataActions } from '../../store/slices/weatherData';
import { hourlyWeatherAction } from '../../store/slices/hourlyWeather';
import { loaderSliceAction } from '../../store/slices/loaderSlice';
import { citySliceAction } from '../../store/slices/changeCitySlice';

const actions = {
  ...dayWeatherDataActions,
  ...hourlyWeatherAction,
  ...loaderSliceAction,
  ...citySliceAction,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
