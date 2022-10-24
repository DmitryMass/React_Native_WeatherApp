import { ICurrentWeatherTypes } from '../types/currentWeatherTypes';
import { IHourlyWeather } from '../types/hourlyWeatherTypes';

const APIKEY = '870e96d1c3e0868300e4af1e9a6ad904';

// const ICON = 'https://openweathermap.org/img/wn/${icon}@2x.png'

async function hourlyWeatherRequest<T>(
  city: string,
  cnt: string,
  method = 'GET',
  body?: object | string | null
): Promise<T> {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${cnt}&appid=${APIKEY}`,
    {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  if (data.ok) {
    return data.json();
  }
  throw new Error('Sorry Weather Server is down');
}

async function currentWeatherRequest<T>(
  city: string,
  method = 'GET',
  body?: object | string | null
): Promise<T> {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`,
    {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  if (data.ok) {
    return data.json();
  }
  throw new Error('Sorry Weather Server is down');
}

export const getCurrentWeather = async (city: string) => {
  try {
    const data = await currentWeatherRequest<ICurrentWeatherTypes>(city);
    return data;
  } catch (e) {
    throw new Error('Не удалось получить текущую погоду');
  }
};

export const getHourlyWeather = async (city: string, cnt: string) => {
  try {
    const data = await hourlyWeatherRequest<IHourlyWeather>(city, cnt);
    return data;
  } catch (e) {
    throw new Error('Не удалось получить почасовую погоду');
  }
};
