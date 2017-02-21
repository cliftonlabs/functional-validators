'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skipEmpty = function skipEmpty(validator) {
  return function (value) {
    if (!(0, _isEmpty2.default)(value)) {
      return validator(value);
    }
  };
};

exports.default = skipEmpty;