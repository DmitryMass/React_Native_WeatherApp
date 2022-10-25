import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentWeather, getHourlyWeather } from '../api/weatherApi';
import useActions from './actions';
import useTypedSelector from './typedSelector';

export const useFetchData = () => {
  const { city: inputCity } = useTypedSelector((state) => state.citySlice);

  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const { getDayWeather, saveHourlyWeather, setLoader } = useActions();

  async function fetchData(city: string = inputCity ? inputCity : 'Dnipro') {
    try {
      dispatch(setLoader(true));
      setRefresh(true);
      const data = await getCurrentWeather(city);
      const foreCastData = await getHourlyWeather(city, '15');
      dispatch(getDayWeather(data));
      dispatch(saveHourlyWeather(foreCastData));
      dispatch(setLoader(false));
    } catch (e) {
      throw new Error('API error');
    } finally {
      setRefresh(false);
      dispatch(setLoader(false));
    }
  }

  return {
    refresh,
    fetchData,
  };
};
