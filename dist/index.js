/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(6);
	module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.kyo = {
	  Loader: _index2.default
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 source loaders for kyojs
	 **/
	var Loader = function () {
	  function Loader(configs) {
	    _classCallCheck(this, Loader);

	    this.configs = configs;
	    this.sources = { images: {}, animate: {}, video: {}, audio: {} };
	    this.events = {};
	  }

	  /**
	   * @param  {sources} the source of images.
	   *  [{url: the image source url
	   *    name: the source name for get the source
	   *  }]
	   * @return 
	   */


	  _createClass(Loader, [{
	    key: 'loadImages',
	    value: function loadImages(sources) {
	      var _this2 = this;

	      var length = sources.length;
	      var loaded = 0;
	      var _this = this;

	      var _loop = function _loop(i) {
	        var image = new Image();
	        image.src = sources[i].url;
	        _this2.sources.images[sources[i].name] = image;
	        image.addEventListener('load', function () {
	          loaded++;
	          if (_this.events.imageLoaded) {
	            _this.events.imageLoaded();
	          }
	          image.removeEventListener('load', function () {});
	        });
	      };

	      for (var i = 0; i < length; i++) {
	        _loop(i);
	      }
	    }

	    // 删除某项资源

	  }, {
	    key: 'delete',
	    value: function _delete(id) {}
	  }, {
	    key: 'on',
	    value: function on(event, func) {
	      switch (event) {
	        case 'imageLoaded':
	          this.events.imageLoaded = func;
	        default:
	          return;
	      }
	    }
	    // 删除所有资源

	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);

	  return Loader;
	}();

	exports.default = Loader;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// 'use strict';
	// const onTime = function() {
	//
	// };
	//
	// class Clock {
	//   function constructor() {
	//     this.time = 0;
	//     this.timer = setInterval(() => {
	//       this.time += 10;
	//       this.onTi
	//     }, 10);
	//   }
	// }
	"use strict";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Interface of Actions. default pngs
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Action = function () {
	  // 图源的起始行、列、宽，高, 帧数, 源图，音效，是否竖排，音效是否循环；
	  // context, x, y, row, col, width, height, src, audioSrc，vert, audioReplay
	  function Action(kyo, context, options) {
	    _classCallCheck(this, Action);

	    this.context = context;
	    this.col = options.col;
	    this.row = options.row;
	    this.width = options.width;
	    this.height = options.height;
	    this.src = options.src;
	    this.verticel = options.vert;
	    this.frameNums = 1;
	    this.clock = kyo.clock;

	    this.img = new Image();
	    this.audio = new Audio();

	    this.loaded = false;
	    this.frameIndex = 0;
	  }

	  _createClass(Action, [{
	    key: 'load',
	    value: function load(cb) {
	      var _this = this;

	      var imgloaded = false;
	      var audioloaded = false;
	      this.onloadstart && this.onloadstart();

	      this.img.onload = function () {
	        _this.imgloaded = true;
	        _this.frameNums = _this.verticel ? Math.floor(_this.img.height / _this.height) : Math.floor(_this.img.width / _this.width);
	        _this.loaded = true;
	        cb && cb();
	      };

	      this.img.src = this.src;
	    }
	  }, {
	    key: 'play',
	    value: function play(x, y) {
	      if (!this.frameNums) {
	        return false;
	      }

	      if (!this.loaded) {
	        return false;
	      }
	      var imgX = this.verticel ? this.row * this.width : (this.row + this.frameIndex) * this.width;
	      var imgY = this.verticel ? (this.col + this.frameIndex) * this.height : this.col * this.height;
	      this.context.drawImage(this.img, imgX, imgY, this.width, this.height, x, y, this.width, this.height);
	      this.frameIndex++;
	      this.frameIndex %= this.frameNums;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {}
	  }, {
	    key: 'stop',
	    value: function stop() {}
	  }]);

	  return Action;
	}();

	exports.default = Action;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);