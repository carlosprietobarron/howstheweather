/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/city.js":
/*!*********************!*\
  !*** ./src/city.js ***!
  \*********************/
/*! exports provided: City, geoLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"City\", function() { return City; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"geoLib\", function() { return geoLib; });\n/* harmony import */ var _httpLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpLibrary */ \"./src/httpLibrary.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\n\r\nclass City {\r\n  constructor(name, lon, lat) {\r\n    this.name = name;\r\n    this.lon = lon;\r\n    this.lat = lat;\r\n  }\r\n\r\n  setGeoLoc(lon, lat) {\r\n    this.lon = lon;\r\n    this.lat = lat;\r\n  }\r\n\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nconst geoLib = (() => {\r\n  const getGeoCity = (cityName) => {\r\n    const cityUrl = `us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`;\r\n    _httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(cityUrl)\r\n      .then(data => {\r\n        const curCity = new City(cityName, data.lat, data.lon);\r\n        return curCity;\r\n      })\r\n      .catch(err => { alert('error en ciudad'); return err; });\r\n  };\r\n\r\n  const getCityNP = async (cityName) => {\r\n    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`;\r\n    const response = await fetch(cityUrl);\r\n    const algo = await response.json();\r\n    return algo;\r\n  };\r\n\r\n  const getLocalWeather = (position) => {\r\n    const geoPos = {\r\n      lat: position.coords.latitude,\r\n      lon: position.coords.longitude,\r\n    };\r\n    _weather__WEBPACK_IMPORTED_MODULE_1__[\"getWeather\"].getWeaLocal(geoPos);\r\n  };\r\n\r\n  const geoLocal = () => {\r\n    if (window.navigator.geolocation) {\r\n      window.navigator.geolocation\r\n        .getCurrentPosition(getLocalWeather);\r\n    }\r\n  };\r\n\r\n  return { getGeoCity, getCityNP, geoLocal };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/city.js?");

/***/ }),

/***/ "./src/domUtils.js":
/*!*************************!*\
  !*** ./src/domUtils.js ***!
  \*************************/
/*! exports provided: domUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domUtils\", function() { return domUtils; });\nconst domUtils = (() => {\n  const deleteEleContent = (elementId) => {\n    const tabContent = document.getElementById(elementId);\n    while (tabContent.firstChild) {\n      tabContent.firstChild.remove();\n    }\n    tabContent.innerHTML = '';\n  };\n\n  const setAttributes = (el, attrs) => {\n    for (const key in attrs) {\n      el.setAttribute(key, attrs[key]);\n    }\n  };\n\n  const eventFire = (el) => {\n    const element = document.getElementById(el);\n\n    element.dispatchEvent(new Event('click'));\n  };\n\n  return { deleteEleContent, setAttributes, eventFire };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/domUtils.js?");

/***/ }),

/***/ "./src/errors.js":
/*!***********************!*\
  !*** ./src/errors.js ***!
  \***********************/
/*! exports provided: NoLocationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoLocationError\", function() { return NoLocationError; });\nclass NoLocationError extends Error {\r\n  constructor(message) {\r\n    super(message); // (1)\r\n    this.name = 'Location_not_found'; // (2)\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/errors.js?");

/***/ }),

/***/ "./src/httpLibrary.js":
/*!****************************!*\
  !*** ./src/httpLibrary.js ***!
  \****************************/
/*! exports provided: httpLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpLibrary\", function() { return httpLibrary; });\nconst httpLibrary = (() => {\n  const get = async (url) => {\r\n    const apiUrl = `https://${url}`;\r\n    const response = await fetch(apiUrl, { mode: 'cors' });\r\n    const resData = await response.json();\r\n    return resData;\r\n  };\r\n\r\n  return { get };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/httpLibrary.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city */ \"./src/city.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\nconst initialize = () => {\r\n  _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].createIcon();\r\n  _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].setBtnEvent();\r\n  _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].setToggle();\r\n};\r\n\r\ninitialize();\r\n_city__WEBPACK_IMPORTED_MODULE_0__[\"geoLib\"].geoLocal();\r\n// getDATA(cityName, getWeather.getWeaNow);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: domcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domcon\", function() { return domcon; });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\n\r\nconst domcon = (() => {\r\n  function alertModal(title, body) {\r\n    // Display error message to the user in a modal\r\n    $('#alert-modal-title').html(title);\r\n    $('#alert-modal-body').html(body);\r\n    $('#alert-modal').modal('show');\r\n  }\r\n\r\n  const cleanForm = () => {\r\n    const element = document.getElementById('city-Name');\r\n    element.value = 'Type Location';\r\n  };\r\n\r\n  const setTemperature = (tempRaw) => {\r\n    const temperature = document.getElementById('temperature');\r\n    let val;\r\n    if (_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius') {\r\n      val = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToCelcius(tempRaw);\r\n    } else {\r\n      val = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToFar(tempRaw);\r\n    }\r\n    temperature.style.height = `${(tempRaw - _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.minTemp) / (_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.maxTemp - _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.minTemp) * 100}%`;\r\n    temperature.dataset.value = Math.round(val).toFixed(2) + _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit];\r\n  };\r\n\r\n  const createIcon = () => {\r\n    const parent = document.getElementById('Weather-icon');\r\n    const newIcon = document.createElement('img');\r\n    parent.appendChild(newIcon);\r\n    _domUtils__WEBPACK_IMPORTED_MODULE_1__[\"domUtils\"].setAttributes(newIcon, {\r\n      id: 'imgIcon',\r\n    });\r\n  };\r\n\r\n  const changeIcon = (iconImg) => {\r\n    const iconUrl = `http://openweathermap.org/img/w/${iconImg}.png`;\r\n    const newIcon = document.getElementById('imgIcon');\r\n    _domUtils__WEBPACK_IMPORTED_MODULE_1__[\"domUtils\"].setAttributes(newIcon, {\r\n      src: iconUrl,\r\n    });\r\n  };\r\n\r\n  const setCityName = (cityName) => {\r\n    const cityField = document.getElementById('weather-string');\r\n    cityField.textContent = cityName;\r\n  };\r\n\r\n  const putMin = (minRaw) => {\r\n    const dispMin = document.getElementById('min-Temp');\r\n    let val;\r\n    if (_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius') {\r\n      val = Math.round(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToCelcius(minRaw)) + _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit];\r\n    } else {\r\n      val = Math.round(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToFar(minRaw)) + _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit];\r\n    }\r\n    dispMin.textContent = val;\r\n  };\r\n\r\n  const putMax = (maxRaw) => {\r\n    const dispMax = document.getElementById('max-Temp');\r\n    let val;\r\n    if (_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius') {\r\n      val = Math.round(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToCelcius(maxRaw)) + _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit];\r\n    } else {\r\n      val = Math.round(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].convertToFar(maxRaw)) + _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit];\r\n    }\r\n    dispMax.textContent = val;\r\n  };\r\n\r\n  // weather-contition\r\n  const setCondition = (description) => {\r\n    const condition = document.getElementById('weather-contition');\r\n    condition.innerHTML = description;\r\n  };\r\n\r\n  const displayWeather = (weder) => {\r\n    setTemperature(weder.temp);\r\n    changeIcon(weder.icon);\r\n    putMin(weder.mintemp);\r\n    putMax(weder.maxtemp);\r\n    setCityName(weder.cityName);\r\n    setCondition(weder.desc);\r\n  };\r\n\r\n  const celToKelvin = (temp) => {\r\n    const res = temp + 273.15;\r\n    return res;\r\n  };\r\n\r\n  const farToKelvin = (temp) => {\r\n    let res = temp - 32;\r\n    res = res * 5 / 9;\r\n    return res + 273.15;\r\n  };\r\n\r\n  const changeUnits = () => {\r\n    let ele = document.getElementById('temperature');\r\n    let temp = parseFloat(ele.dataset.value);\r\n    temp = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius' ? farToKelvin(temp) : celToKelvin(temp);\r\n    setTemperature(temp);\r\n    ele = document.getElementById('min-Temp');\r\n    let min = parseInt(ele.textContent, 10);\r\n    min = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius' ? farToKelvin(min) : celToKelvin(min);\r\n    putMin(min);\r\n    ele = document.getElementById('max-Temp');\r\n    let max = parseInt(ele.textContent, 10);\r\n    max = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius' ? farToKelvin(max) : celToKelvin(max);\r\n    putMax(max);\r\n  };\r\n  const setToggle = () => {\r\n    const unitP = document.getElementById('unit');\r\n\r\n    unitP.addEventListener('click', () => {\r\n      _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit = _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit === 'Celcius' ? 'Fahrenheit' : 'Celcius';\r\n      unitP.innerHTML = `${_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit} ${_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].units[_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit]}`;\r\n      changeUnits(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].config.unit);\r\n    });\r\n  };\r\n\r\n  const callWeather = () => {\r\n    const city = document.getElementById('city-Name');\r\n    _weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"].getWeaNow(city.value);\r\n    cleanForm();\r\n  };\r\n\r\n  const setBtnEvent = () => {\r\n    const btn = document.getElementById('change-btn');\r\n    btn.onclick = callWeather;\r\n    const city = document.getElementById('city-Name');\r\n    btn.cityName = city.value;\r\n  };\r\n\r\n  return {\r\n    displayWeather, createIcon, setBtnEvent, setToggle, alertModal, cleanForm,\r\n  };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony import */ var _httpLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpLibrary */ \"./src/httpLibrary.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ \"./src/errors.js\");\n\r\n\r\n\r\n\r\nclass cityWeather {\r\n  constructor(cityName, temp, maxtemp, mintemp, clouds, wind, desc, icon) {\r\n    this.cityName = cityName;\r\n    this.temp = temp;\r\n    this.maxtemp = maxtemp;\r\n    this.mintemp = mintemp;\r\n    this.clouds = clouds;\r\n    this.wind = wind;\r\n    this.desc = desc;\r\n    this.icon = icon;\r\n  }\r\n}\r\n\r\nconst getWeather = (() => {\r\n  const units = {\r\n    Celcius: '°C',\r\n    Fahrenheit: '°F',\r\n  };\r\n\r\n  const config = {\r\n    minTemp: 253.15,\r\n    maxTemp: 343.15,\r\n    unit: 'Celcius',\r\n  };\r\n\r\n  const getData = async (cityName) => {\r\n    _httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`)\r\n      .then(data => {\r\n        const retValue = data;\r\n        return retValue;\r\n      })\r\n      .catch(err => { alert('An error ocurred while searching location'); return err; });\r\n  };\r\n\r\n  const getData2 = async (cityName) => {\r\n    const requestUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`;\r\n    const revalue = await _httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(requestUrl);\r\n    return revalue;\r\n  };\r\n\r\n  const getData3 = async (position) => {\r\n    const { lat } = position;\r\n    const { lon } = position;\r\n    const requestUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a023b91f5807ab913cdcb2fac498122a`;\r\n    const revalue = await _httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(requestUrl);\r\n    return revalue;\r\n  };\r\n\r\n  const getWeaNow = async (cityName) => {\r\n    let weaVar;\r\n    let weder;\r\n    let messageError;\r\n    try {\r\n      weaVar = await getData2(cityName);\r\n      if (weaVar.cod === '404') {\r\n        messageError = 'Location no found!';\r\n        throw new _errors__WEBPACK_IMPORTED_MODULE_2__[\"NoLocationError\"](messageError);\r\n      }\r\n\r\n      const {\r\n        main: { temp, temp_max: tempMax, temp_min: tempMin }, clouds: { all: cloud }, weather: [item1],\r\n      } = weaVar;\r\n      const { description, icon } = item1;\r\n\r\n      weder = new cityWeather(cityName, temp, tempMax, tempMin, cloud, '0', description, icon);\r\n      _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].displayWeather(weder);\r\n    } catch (error) {\r\n      _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].alertModal('Search Error', error.message);\r\n    }\r\n\r\n    _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].cleanForm();\r\n    return weder;\r\n  };\r\n\r\n  const getWeaLocal = async (position) => {\r\n    let weaVar;\r\n    let weder;\r\n    try {\r\n      weaVar = await getData3(position);\r\n\r\n      const {\r\n        main: { temp, temp_max: tempMax, temp_min: tempMin }, name, clouds: { all: cloud }, weather: [item1],\r\n      } = weaVar;\r\n      const { description, icon } = item1;\r\n\r\n      weder = new cityWeather(name, temp, tempMax, tempMin, cloud, '0', description, icon);\r\n    } catch (error) {\r\n      _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].alertModal('Search Error', error.message);\r\n    }\r\n\r\n    _ui__WEBPACK_IMPORTED_MODULE_1__[\"domcon\"].displayWeather(weder);\r\n\r\n    return weder;\r\n  };\r\n\r\n  const convertToCelcius = (rawTemp) => rawTemp - 273.15;\r\n\r\n  const convertToFar = (rawTemp) => ((rawTemp - 273.15) * 9 / 5) + 32;\r\n\r\n  return {\r\n    getData, getWeaNow, getWeaLocal, convertToCelcius, convertToFar, units, config,\r\n  };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });