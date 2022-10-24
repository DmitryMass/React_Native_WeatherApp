import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { dayWeatherDataActions } from '../../store/slices/weatherData';
import { hourlyWeatherAction } from '../../store/slices/hourlyWeather';

const actions = {
  ...dayWeatherDataActions,
  ...hourlyWeatherAction,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
