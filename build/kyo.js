'use strict';

var _index = require('./loader/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./uicomponents/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.kyo = {
  Loader: _index2.default,
  UIComponents: _index4.default
};