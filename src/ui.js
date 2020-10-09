import { getWeather }  from './weather';
import { domUtils } from './domUtils';
import { vi } from './video';

const domcon = ( () =>{
    function alertModal(title, body) {
        // Display error message to the user in a modal
        $('#alert-modal-title').html(title);
        $('#alert-modal-body').html(body);
        $('#alert-modal').modal('show');
      }


    const createIcon = () => {
        const parent = document.getElementById("Weather-icon");
        const newIcon = document.createElement("img");
        parent.appendChild(newIcon);
        domUtils.setAttributes(newIcon,{
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

    const setCityName = (cityName) => {
      const cityField = document.getElementById("weather-string")
      cityField.textContent = cityName;
    }

    const putMin = (minRaw) => {
        const dispMin = document.getElementById("min-Temp");
        let val;
        if (getWeather.config.unit === "Celcius") {
            val = Math.round(getWeather.convertToCelcius(minRaw)) + getWeather.units[getWeather.config.unit];
        } else {
            val = Math.round(getWeather.convertToFar(minRaw)) + getWeather.units[getWeather.config.unit];
        }
        dispMin.textContent = val;
    }

    const putMax = (maxRaw) => {
        const dispMax = document.getElementById("max-Temp");
        let val;
        if (getWeather.config.unit === "Celcius") {
            val =Math.round( getWeather.convertToCelcius(maxRaw) ) + getWeather.units[getWeather.config.unit];
        } else {
            val = Math.round(getWeather.convertToFar(maxRaw)) + getWeather.units[getWeather.config.unit];
        }
        dispMax.textContent = val;
    }

    //weather-contition
    const setCondition = (description) => {
        const condition = document.getElementById("weather-contition")
        condition.innerHTML = description;
      }

    const startVideo = () => {
      videoLooper.videoEndListener();
    }

    const displayWeather = (weder) => {
      setTemperature(weder.temp);
      changeIcon(weder.icon);
      putMin(weder.mintemp);
      putMax(weder.maxtemp);
      setCityName(weder.cityName);
      setCondition(weder.desc);

    }

    const celToKelvin = (temp) => {
      let res = temp + 273.15;
      return res;
    }

    const farToKelvin = (temp) => {
        let res = temp-32;
        res = res * 5 / 9;
        return res + 273.15;
    }


    const changeUnits = () => {
        let ele = document.getElementById("temperature");
        let temp = parseFloat(ele.dataset.value);
        temp = getWeather.config.unit === "Celcius" ? farToKelvin(temp)  : celToKelvin(temp);
        setTemperature(temp);
        ele = document.getElementById("min-Temp");
        let  min = parseInt(ele.textContent);
        min = getWeather.config.unit === "Celcius" ? farToKelvin(min)  : celToKelvin(min);
        putMin(min);
        ele = document.getElementById("max-Temp");
        let max = parseInt(ele.textContent);
        max = getWeather.config.unit === "Celcius" ? farToKelvin(max)  : celToKelvin(max);
        putMax(max);
        console.log(temp, min, max);
    }
    const setToggle = () =>{
      const unitP = document.getElementById("unit");

      unitP.addEventListener("click", () => {
	    getWeather.config.unit = getWeather.config.unit === "Celcius" ? "Fahrenheit" : "Celcius";
        unitP.innerHTML = getWeather.config.unit + ' ' + getWeather.units[getWeather.config.unit];
        changeUnits(getWeather.config.unit);
        //return setTemperature();
      });
    }

    const setTemperature = (tempRaw) => {
        const temperature = document.getElementById("temperature");
        let val;
        if (getWeather.config.unit === "Celcius") {
            val = getWeather.convertToCelcius(tempRaw);
        } else {
            val = getWeather.convertToFar(tempRaw);
        }
        temperature.style.height = 
          (tempRaw - getWeather.config.minTemp) / (getWeather.config.maxTemp - getWeather.config.minTemp) * 100 + "%";
        temperature.dataset.value = Math.round(val).toFixed(2) + getWeather.units[getWeather.config.unit];
    }
    
    const callWeather = (evt) =>{
      const cityName = evt.target.cityName;
      const city = document.getElementById("city-Name");
      const form = document.getElementById("cityForm");
      getWeather.getWeaNow(city.value);
      cleanForm();
    }

    const setBtnEvent = () => {
        const btn = document.getElementById("change-btn");
        btn.onclick = callWeather;
        const city = document.getElementById("city-Name")
        btn.cityName = city.value;
    }

    const cleanForm = () => {
        const element = document.getElementById("city-Name");
        element.value = "Type Location";
    }
    
  return { displayWeather, createIcon, setBtnEvent, setToggle, alertModal, cleanForm }

})();

export { domcon }