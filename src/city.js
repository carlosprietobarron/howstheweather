import { httpLibrary } from './httpLibrary';
import { getWeather } from './weather';

class City {
  constructor(name, lon, lat) {
    this.name = name;
    this.lon = lon;
    this.lat = lat;
  }

  setGeoLoc(lon, lat) {
    this.lon = lon;
    this.lat = lat;
  }

  setName(name) {
    this.name = name;
  }
}

const geoLib = (() => {
  const getGeoCity = (cityName) => {
    const cityUrl = `us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`;
    httpLibrary.get(cityUrl)
      .then(data => {
        const curCity = new City(cityName, data.lat, data.lon);
        return curCity;
      })
      .catch(err => { alert('error en ciudad'); return err; });
  };

  const getCityNP = async (cityName) => {
    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`;
    const response = await fetch(cityUrl);
    const algo = await response.json();
    return algo;
  };

  const getLocalWeather = (position) => {
    const geoPos = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    getWeather.getWeaLocal(geoPos);
  };

  const geoLocal = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation
        .getCurrentPosition(getLocalWeather);
    }
  };

  return { getGeoCity, getCityNP, geoLocal };
})();

export { City, geoLib };
