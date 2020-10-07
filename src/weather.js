import { httpLibrary } from './httpLibrary'
import { domcon } from './ui'

class cityWeather {
  constructor (cityName, temp, maxtemp, mintemp, clouds, wind, desc, icon ){
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


const getWeather = ( () =>{

  const units = {
    Celcius: "°C",
    Fahrenheit: "°F"
  };
  
  const config = {
    minTemp: 253.15,
    maxTemp: 343.15,
    unit: "Celcius"
  };
  
    const getData = async (cityName) => {
      httpLibrary.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`)
     .then(data => {
         const retValue = data;
         //console.log(response);
         return retValue;
      })
     .catch(err => console.log(err));
    };

    const getData2 = async (cityName) => {
      const requestUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`
      const revalue = await httpLibrary.get(requestUrl)
      return revalue;
      }

    const getData3 = async (position) => {
      const lat = position.lat;
      const lon = position.lon;
      const requestUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a023b91f5807ab913cdcb2fac498122a`
      const revalue = await httpLibrary.get(requestUrl)
      return revalue;
    }
    
  
    const getWeaNow =  async (cityName) => {
      const weaVar = await getData2(cityName);
      console.log(weaVar.main);
      console.log(weaVar);

      const {main: {temp, temp_max, temp_min, feels_like}, clouds: { all: cloud }, weather:[item1] } = weaVar;
      const { description, icon } = item1;
      console.log("temps", temp, temp_max, temp_min);
      console.log("cloud", cloud);
      console.log("item1", item1 , description);

      const weder = new cityWeather(cityName,temp,temp_max,temp_min,cloud,"0",description, icon);

      console.log(weder);

      return weder;
    };

    const getWeaLocal =  async (position) => {
      const weaVar = await getData3(position);
      console.log(weaVar.main);
      console.log(weaVar);

      const {main: {temp, temp_max, temp_min, feels_like}, name ,clouds: { all: cloud }, weather:[item1] } = weaVar;
      const { description, icon } = item1;
      console.log("temps", temp, temp_max, temp_min);
      console.log("cloud", cloud);
      console.log("item1", item1 , description);
      console.log("name", name);

      const weder = new cityWeather(name,temp,temp_max,temp_min,cloud,"0",description, icon);
 
      console.log(weder);
      
      domcon.displayWeather(weder);

      return weder;
    }

    const convertToCelcius = (rawTemp) => {
      return rawTemp - 273.15;
    }

    const convertToFar = (rawTemp) => {
      return (( rawTemp - 273.15) * 9/5) + 32;
    }
  
    return { getData, getWeaNow, getWeaLocal, convertToCelcius, convertToFar, units, config }
  })();
  
  export { getWeather }