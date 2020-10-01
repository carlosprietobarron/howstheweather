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
/*! exports provided: city, geoLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"city\", function() { return city; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"geoLib\", function() { return geoLib; });\n/* harmony import */ var _httpLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpLibrary */ \"./src/httpLibrary.js\");\n\r\n\r\nclass city {\r\n    constructor (name, lon, lat) {\r\n        this.name = name;\r\n        this.lon = lon;\r\n        this.lat = lat;\r\n    }\r\n\r\n    setGeoLoc(lon,lat) {\r\n        this.lon = lon;\r\n        this.lat = lat;\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n}\r\n\r\nconst geoLib = ( () => {\r\n  const getGeo = (cityName) => {\r\n      const cityUrl = `us1.locationiq.com/v1/search.php?key=87582cb5a47857&q=${cityName}&format=json`\r\n      _httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(cityUrl)\r\n         .then(data => console.log(data))\r\n         .catch(err => console.log(err));\r\n  } \r\n\r\n  return { getGeo }\r\n})();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2l0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jaXR5LmpzPzRmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cExpYnJhcnkgfSBmcm9tICcuL2h0dHBMaWJyYXJ5J1xyXG5cclxuY2xhc3MgY2l0eSB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbG9uLCBsYXQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubG9uID0gbG9uO1xyXG4gICAgICAgIHRoaXMubGF0ID0gbGF0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdlb0xvYyhsb24sbGF0KSB7XHJcbiAgICAgICAgdGhpcy5sb24gPSBsb247XHJcbiAgICAgICAgdGhpcy5sYXQgPSBsYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2VvTGliID0gKCAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0R2VvID0gKGNpdHlOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpdHlVcmwgPSBgdXMxLmxvY2F0aW9uaXEuY29tL3YxL3NlYXJjaC5waHA/a2V5PTg3NTgyY2I1YTQ3ODU3JnE9JHtjaXR5TmFtZX0mZm9ybWF0PWpzb25gXHJcbiAgICAgIGh0dHBMaWJyYXJ5LmdldChjaXR5VXJsKVxyXG4gICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0gXHJcblxyXG4gIHJldHVybiB7IGdldEdlbyB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2NpdHksIGdlb0xpYn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/city.js\n");

/***/ }),

/***/ "./src/httpLibrary.js":
/*!****************************!*\
  !*** ./src/httpLibrary.js ***!
  \****************************/
/*! exports provided: httpLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpLibrary\", function() { return httpLibrary; });\nconst httpLibrary =( () => {\r\n    \r\n    const get = async (url) =>{\r\n        const apiUrl = 'https://'+ url;\r\n        const response = await fetch(apiUrl, { mode: 'cors' });\r\n        const resData = await response.json();\r\n        return resData;\r\n      }\r\n\r\n    return { get };\r\n})();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaHR0cExpYnJhcnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaHR0cExpYnJhcnkuanM/YTdhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBodHRwTGlicmFyeSA9KCAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldCA9IGFzeW5jICh1cmwpID0+e1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovLycrIHVybDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzRGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgaHR0cExpYnJhcnkgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/httpLibrary.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _httpLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpLibrary */ \"./src/httpLibrary.js\");\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city */ \"./src/city.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet cityName='Mombasa,Kenia';\r\n \r\n_city__WEBPACK_IMPORTED_MODULE_1__[\"geoLib\"].getGeo(cityName);\r\n\r\n_httpLibrary__WEBPACK_IMPORTED_MODULE_0__[\"httpLibrary\"].get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a023b91f5807ab913cdcb2fac498122a`)\r\n   .then(data => console.log(data))\r\n   .catch(err => console.log(err));\r\n\r\nconsole.log(\"finito\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodHRwTGlicmFyeSB9IGZyb20gJy4vaHR0cExpYnJhcnknXHJcbmltcG9ydCB7IGNpdHksIGdlb0xpYiB9IGZyb20gJy4vY2l0eSdcclxuXHJcblxyXG5cclxuXHJcbmxldCBjaXR5TmFtZT0nTW9tYmFzYSxLZW5pYSc7XHJcbiBcclxuZ2VvTGliLmdldEdlbyhjaXR5TmFtZSk7XHJcblxyXG5odHRwTGlicmFyeS5nZXQoYGFwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPWEwMjNiOTFmNTgwN2FiOTEzY2RjYjJmYWM0OTgxMjJhYClcclxuICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiZmluaXRvXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });