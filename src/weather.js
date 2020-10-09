import { httpLibrary } from './httpLibrary';
import { domcon } from './ui';
import { NoLocationError } from './errors';

class cityWeather {
  constructor(cityName, temp, maxtemp, mintemp, clouds, wind, desc, icon) {
    this.cityName = cityName;
    this.temp = temp;
    this.maxtemp = maxtemp;
    this.mintemp = mintemp;
    this.clouds = clouds;
    this.wind = wind;
    this.desc = desc;
    this.icon = icon;
  }
}

const getWeather = (() => {
  const units = {
    Celcius: '°C',
    Fahrenheit: '°F',
  };

  const config = {
    minTemp: 253.15,
    maxTemp: 343.15,
    unit: 'Celcius',
  };

  const getData = async (cityName) => {
    httpLibrary.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`)
      .then(data => {
        const retValue = data;
        return retValue;
      })
      .catch(err => { alert('An error ocurred while searching location'); return err; });
  };

  const getData2 = async (cityName) => {
    const requestUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`;
    const revalue = await httpLibrary.get(requestUrl);
    return revalue;
  };

  const getData3 = async (position) => {
    const { lat } = position;
    const { lon } = position;
    const requestUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a023b91f5807ab913cdcb2fac498122a`;
    const revalue = await httpLibrary.get(requestUrl);
    return revalue;
  };

  const getWeaNow = async (cityName) => {
    let weaVar;
    let weder;
    let messageError;
    try {
      weaVar = await getData2(cityName);
      if (weaVar.cod === '404') {
        messageError = 'Location no found!';
        throw new NoLocationError(messageError);
      }

      const {
        main: { temp, temp_max: tempMax, temp_min: tempMin }, clouds: { all: cloud }, weather: [item1],
      } = weaVar;
      const { description, icon } = item1;

      weder = new cityWeather(cityName, temp, tempMax, tempMin, cloud, '0', description, icon);
      domcon.displayWeather(weder);
    } catch (error) {
      domcon.alertModal('Search Error', error.message);
    }

    domcon.cleanForm();
    return weder;
  };

  const getWeaLocal = async (position) => {
    let weaVar;
    let weder;
    try {
      weaVar = await getData3(position);

      const {
        main: { temp, temp_max: tempMax, temp_min: tempMin }, name, clouds: { all: cloud }, weather: [item1],
      } = weaVar;
      const { description, icon } = item1;

      weder = new cityWeather(name, temp, tempMax, tempMin, cloud, '0', description, icon);
    } catch (error) {
      domcon.alertModal('Search Error', error.message);
    }

    domcon.displayWeather(weder);

    return weder;
  };

  const convertToCelcius = (rawTemp) => rawTemp - 273.15;

  const convertToFar = (rawTemp) => ((rawTemp - 273.15) * 9 / 5) + 32;

  return {
    getData, getWeaNow, getWeaLocal, convertToCelcius, convertToFar, units, config,
  };
})();

export { getWeather };