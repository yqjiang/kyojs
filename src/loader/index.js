/**
 source loaders for kyojs
 **/
class Loader {
  constructor(configs) {
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
  loadImages(sources) {
    let length = sources.length;
    let loaded = 0;
    let _this = this;
    for (let i = 0; i < length; i++) {
      let image = new Image();
      image.src = sources[i].url;
      this.sources.images[sources[i].name] = image;
      image.addEventListener('load', function() {
        loaded++;
        if (_this.events.imageLoaded) {
          _this.events.imageLoaded();
        }
        image.removeEventListener('load', function() {});
      });
    }
  }


  loadAnimates(sources) {
    let length = sources.length;
    let loaded = 0;
    let _this = this;
    for (let i = 0; i < length; i++) {
      this.sources.images[sources[i].name] = [];
      for (let j = 0, l = animates[i].urls.length; j < l; j++) {
        let image = new Image();
        this.animates[sources[i].name].push(image);
        image.src = sources[i].urls[i];
      }
    }
  }

  // 删除某项资源
  delete(id) {}


  on(event, func) {
    switch (event) {
      case 'imageLoaded':
        this.events.imageLoaded = func;
      default:
        return;
    }
  }
  // 删除所有资源
  destroy() {}
}
export default Loader;