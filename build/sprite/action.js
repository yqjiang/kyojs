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
  function Action(context, options) {
    _classCallCheck(this, Action);

    this.context = context;
    this.col = options.col;
    this.row = options.row;
    this.width = options.width;
    this.height = options.height;
    this.src = options.src;
    this.audioSrc = options.audioSrc;
    this.verticel = options.vert;
    this.audioReplay = options.audioReplay;
    this.animationSpeed = options.animationSpeed;
    this.frameNums = 1;

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
        if (_this.audioloaded || !_this.audioSrc) {
          _this.loaded = true;
          cb && cb();
        }
      };

      if (this.audioSrc) {
        this.audio.onload = function () {
          _this.audioloaded = true;
          if (_this.imgloaded) {
            _this.loaded = true;
            cb && cb();
          }
        };
      }

      this.img.src = this.src;
      this.audio.src = this.audioSrc;
      if (this.audioSrc) {
        this.audio.src = this.audioSrc;
      }
    }
  }, {
    key: 'play',
    value: function play(x, y) {
      var _this2 = this;

      if (!this.frameNums) {
        return false;
      }

      if (!this.loaded) {
        return false;
      }
      var imgX = this.verticel ? this.row * this.width : (this.row + this.frameIndex) * this.width;
      var imgY = this.verticel ? (this.col + this.frameIndex) * this.height : this.col * this.height;
      this.context.drawImage(this.img, imgX, imgY, this.width, this.height, x, y, this.width, this.height);
      if (this.audioSrc && !this.audioPlaying && (!this.audioPlayed || this.audioReplay)) {
        this.audio.play();
        this.audioPlaying = true;
        this.audio.addEventListener('end', function () {
          _this2.audioPlaying = false;
          _this2.audioPlayed = true;
        });
      }
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