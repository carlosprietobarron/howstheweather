import { httpLibrary } from './httpLibrary'
import { City, geoLib } from './city'
import { domcon } from './ui'


let cityName='Toluca,Mexico';
 
const getDATA = async (cityName,fn) => {
  const city = await geoLib.getCityNP(cityName);
  console.log(city);
  // const city = geoLib.getPromises(cityName);
  const vari = await fn(cityName);

  console.log(vari);
  
}

const initialize = () => {
  domcon.createIcon();
}

initialize();
geoLib.geoLocal();
//getDATA(cityName, getWeather.getWeaNow);

