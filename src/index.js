import { geoLib } from './city';
import { domcon } from './ui';


const getDATA = async (cityName, fn) => {
  const city = await geoLib.getCityNP(cityName);
  console.log(city);
  // const city = geoLib.getPromises(cityName);
  const vari = await fn(cityName);

  console.log(vari);
};

const initialize = () => {
  domcon.createIcon();
  domcon.setBtnEvent();
  domcon.setToggle();
};

initialize();
geoLib.geoLocal();
// getDATA(cityName, getWeather.getWeaNow);
