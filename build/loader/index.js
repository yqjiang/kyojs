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
    this.sources = {
      images: {},
      animates: {},
      videos: {},
      audios: {}
    };
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
  }, {
    key: 'loadAnimates',
    value: function loadAnimates(sources) {
      var length = sources.length;
      var loaded = 0;
      var _this = this;
      for (var i = 0; i < length; i++) {
        this.sources.images[sources[i].name] = [];
        for (var j = 0, l = animates[i].urls.length; j < l; j++) {
          var _image = new Image();
          this.animates[sources[i].name].push(_image);
          _image.src = sources[i].urls[i];
        }
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