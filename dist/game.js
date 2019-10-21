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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nes.css/css/nes.min.css":
/*!**********************************************!*\
  !*** ./node_modules/nes.css/css/nes.min.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/nes.css/css/nes.min.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_nes_css_css_nes_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/nes.css/css/nes.min.css */ \"./node_modules/nes.css/css/nes.min.css\");\n/* harmony import */ var _node_modules_nes_css_css_nes_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nes_css_css_nes_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Game() {\n  var self = this,\n      timer,\n      meta = {\n    score: 0,\n    highestScore: 0,\n    level: 1,\n    levels: 5\n  },\n      elements = {\n    person: document.querySelector(\".person\"),\n    obstacles: document.querySelector(\".obstacles\"),\n    score: document.getElementById(\"metaScore\"),\n    level: document.getElementById(\"metaLevel\"),\n    highestScore: document.getElementById(\"metaHighest\")\n  },\n      constants = {\n    jumpClass: \"jumped\",\n    obstacleClass: \"obstacle\",\n    obstacleVariation: [\"obstacle-mini\", \"obstacle-medium\", \"obstacle-large\"]\n  };\n\n  self.start = function () {\n    jump();\n    timer = setInterval(function () {\n      moveObstacles();\n      moveBackgrounds();\n      detectCollision();\n      updateScore();\n    }, 100);\n  };\n\n  self.pause = function () {};\n\n  self.resume = function () {};\n\n  self.restart = function () {\n    self.start();\n  };\n\n  self.stop = function () {\n    // storeState(meta);\n    clearTimeout(timer);\n  };\n\n  self.mute = function () {\n    var isMute = localStorage.getItem(\"mute\") ? true : false;\n    localStorage.setItem(\"isMute\", isMute);\n  };\n\n  self.changeAvatar = function () {\n    var isMale = localStorage.getItem(\"gender\") === \"M\" ? true : false;\n    localStorage.setItem(\"isMale\", isMale);\n  };\n\n  function jump() {\n    document.addEventListener(\"keyup\", function (e) {\n      e.preventDefault();\n\n      if (e.keyCode === 32) {\n        elements.person.classList.add(constants.jumpClass);\n\n        var _timer = setTimeout(function () {\n          elements.person.classList.remove(constants.jumpClass);\n          clearTimeout(_timer);\n        }, 400);\n      }\n    }, true);\n  }\n\n  function moveObstacles() {}\n\n  function moveBackgrounds() {}\n\n  function detectCollision() {// var collide = false;\n    // if(collide) {\n    // \tself.playSound('collide');\n    // \tself.stop();\n    // }\n  }\n\n  function playSound() {}\n\n  function updateScore() {\n    meta.score++;\n    elements.score.innerText = meta.score;\n\n    if (meta.score % 100 == 0) {\n      updateLevel(); // self.stop();\n    }\n  }\n\n  function updateLevel() {\n    meta.level++;\n    elements.level.innerText = meta.level;\n  }\n\n  function storeState(s, hs, l, mute) {\n    var obj = {\n      score: s,\n      highScore: hs,\n      level: l\n    };\n\n    for (keys in obj) {\n      localStorage.setItem(keys, obj[keys]);\n    }\n  }\n\n  self.init = function () {\n    self.start();\n\n    var _new = new Obstacles();\n\n    _new.generate();\n  };\n\n  function Obstacles() {\n    var obstacle = this,\n        pos = 600,\n        interval;\n\n    obstacle.generate = function () {\n      var random = function _randon() {\n        var _num = Math.ceil(Math.random() * 10);\n\n        if (_num <= 3) return _num;else return _randon();\n      },\n          _obs = document.createElement(\"span\");\n\n      _obs.classList.add(constants.obstacleClass);\n\n      _obs.classList.add(constants.obstacleVariation[random() - 1]);\n\n      elements.obstacles.appendChild(_obs);\n      interval = setInterval(obstacle.move, 60);\n    };\n\n    obstacle.move = function (elm) {\n      pos -= 10;\n      document.querySelector(\".obstacle\").style.transform = \"translateX(\" + pos + \"px)\";\n      if (pos <= 0) obstacle.destroy();\n    };\n\n    obstacle.destroy = function () {\n      clearTimeout(interval);\n      document.querySelector(\".obstacle\").remove();\n      pos = 700;\n      obstacle.generate();\n    };\n  }\n}\n\n;\nvar SpaceBarGame = new Game();\nSpaceBarGame.init();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ })

/******/ });