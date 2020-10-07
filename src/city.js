import { httpLibrary } from './httpLibrary'
import { getWeather } from './weather'

class City {
    constructor (name, lon, lat) {
        this.name = name;
        this.lon = lon;
        this.lat = lat;
    }

    setGeoLoc(lon,lat) {
        this.lon = lon;
        this.lat = lat;
    }

    setName(name) {
        this.name = name;
    }
}

const geoLib = ( () => {
  const getGeo = (cityName) => {
      const cityUrl = `us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`
      httpLibrary.get(cityUrl)
         .then(data => console.log(data))
         .catch(err => console.log(err));
  } ;

  const getGeoCity =  (cityName) => {
    const cityUrl = `us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`
    httpLibrary.get(cityUrl)
         .then(data => {
            const curCity = new City(cityName,data.lat, data.lon);
            console.log(data);
            return curCity;
         })
         .catch(err => console.log(err));
  } ;

  const getCityNP = async (cityName) => {
        const cityUrl = `https://us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`
        const response = await fetch(cityUrl);
        const algo = await response.json();
        console.log(algo);
        // const data = await response.json();
        // return data;
  };

  const geoLocal = () => {
    if (window.navigator.geolocation) {
        window.navigator.geolocation
         .getCurrentPosition(getLocalWeather, console.log);
       }
  };

  const getLocalWeather = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const geoPos = {
         "lat": position.coords.latitude,
         "lon": position.coords.longitude
      }
      console.log("position", lat, lon);
      getWeather.getWeaLocal(geoPos);
  }
  
  return { getGeo, getGeoCity, getCityNP, geoLocal }
})();

export {City, geoLib}

