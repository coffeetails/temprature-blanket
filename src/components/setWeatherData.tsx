import './form.scss';
import { Day, Hours, Weather } from '../models/models';


export async function setWeatherData(data: { days: { hours: { temp: number; datetime: string; }[]; datetime: string; }[]; }, location: string, unit: string, userApiKey: string) {
  if(data) {
    const daysData: Day[] = setDays(data);

    const weatherData: Weather = {
      location: location,
      unit: unit,
      useMyApi: !userApiKey,
      days: daysData
    }

    return weatherData;
  }
}

function setDays(data: { days: any; }) {
  return data.days.map((dataDays: { hours: { temp: number; datetime: string; }[]; datetime: string; }) => {
    const hoursData: Hours[] = setHours(dataDays);

    return ({
      datetime: dataDays.datetime,
      hours: hoursData
    });
  });
}

function setHours(dataDays: { hours: any; datetime?: string; }) {
  return dataDays.hours.map((dataHours: { temp: number; datetime: string; }) => {
    
    return ({
      temp: dataHours.temp,
      datetime: dataHours.datetime
    })
  });
}
