import { httpLibrary } from './httpLibrary'

class city {
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
  } 

  return { getGeo }
})();

export {city, geoLib}