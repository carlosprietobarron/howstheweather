import { getWeather }  from './weather';
import { domUtils } from './domUtils';
import { vi } from './video';

const domcon = ( () =>{
    const createIcon = () => {
        const parent = document.getElementById("Weather-icon");
        const newIcon = document.createElement("img");
        parent.appendChild(newIcon);
        domUtils = setAttributes(newIcon,{
            "id": "imgIcon"
        })
    };
    
    const changeIcon = (iconImg) =>{
      const iconUrl = `http://openweathermap.org/img/w/${iconImg}.png`
      const newIcon = document.getElementById("imgIcon");
      domUtils.setAttributes(newIcon,{
        "src" : iconUrl
      }) 
    };

   
    const putMin = (minRaw) => {
        const dispMin = document.getElementById("min-Temp");
        let val;
        if (getWeather.config.unit === "Celcius") {
            val = getWeather.convertToCelcius(minRaw);
        } else {
            val = getWeather.convertToFar(minRaw);
        }
        dispMin.textContent = val;
    }

    const putMax = (maxRaw) => {
        const dispMax = document.getElementById("max-Temp");
        let val;
        if (getWeather.config.unit === "Celcius") {
            val = getWeather.convertToCelcius(maxRaw);
        } else {
            val = getWeather.convertToFar(maxRaw);
        }
        dispMax.textContent = val;
    }

    const startVideo = () => {
      videoLooper.videoEndListener();
    }

    const displayWeather = (weder) => {
      setTemperature(weder.temp);
      changeIcon(weder.icon);
      putMin(weder.minTemp);
      putMax(weder.maxtemp);

    }

    const setToggle = () =>{
      const unitP = document.getElementById("unit");

      unitP.addEventListener("click", () => {
	    getWeather.config.unit = getWeather.config.unit === "Celcius" ? "Fahrenheit" : "Celcius";
	    unitP.innerHTML = getWeather.config.unit + ' ' + getWeather.units[config.unit];
        
        return setTemperature();
      });
    }

    function setTemperature(tempRaw) {
        if (getWeather.config.unit === "Celcius") {
            val = getWeather.convertToCelcius(tempRaw);
        } else {
            val = getWeather.convertToFar(tempRaw);
        }
        temperature.style.height = 
          (tempRaw - getWeather.config.minTemp) / (getWeather.config.maxTemp - config.minTemp) * 100 + "%";
        temperature.dataset.value = val + units[config.unit];
    }
    
  return { displayWeather, createIcon }

})();

export { domcon }