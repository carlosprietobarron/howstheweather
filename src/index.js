import { httpLibrary } from './httpLibrary'
import { city, geoLib } from './city'




let cityName='Mombasa,Kenia';
 
geoLib.getGeo(cityName);

httpLibrary.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`)
   .then(data => console.log(data))
   .catch(err => console.log(err));

console.log("finito");