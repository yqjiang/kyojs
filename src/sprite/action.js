'use strict';

/**
 * Interface of Actions. default pngs
 */

class Action {
  // 图源的起始行、列、宽，高, 帧数, 源图，音效，是否竖排，音效是否循环；
  // context, x, y, row, col, width, height, src, audioSrc，vert, audioReplay
  constructor (kyo, context, options) {
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

  load(cb) {
    var imgloaded = false;
    var audioloaded = false;
    this.onloadstart && this.onloadstart();

    this.img.onload = () => {
      this.imgloaded = true;
      this.frameNums = this.verticel ?  Math.floor(this.img.height / this.height) : Math.floor(this.img.width / this.width);
      this.loaded = true;
      cb && cb();
    }

    this.img.src = this.src;
  }

  play(x,y) {
    if(!this.frameNums) {
      return false;
    }

    if(!this.loaded) {
      return false;
    }
    let imgX = this.verticel ?  this.row * this.width : (this.row  + this.frameIndex) * this.width;
    let imgY = this.verticel ? (this.col  + this.frameIndex) * this.height : this.col * this.height;
    this.context.drawImage(this.img, imgX, imgY, this.width, this.height, x, y, this.width, this.height);
    this.frameIndex ++;
    this.frameIndex %= this.frameNums;
  }

  pause() {

  }

  stop()  {

  }
}

export default Action;
