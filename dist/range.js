'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requireParam = require('./util/requireParam');

var _requireParam2 = _interopRequireDefault(_requireParam);

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

var _min = require('./min');

var _min2 = _interopRequireDefault(_min);

var _max = require('./max');

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paramMissing = 'You must specify a minimum and a maximum value when validating with range';

/**
 * Tests that a value is within a range
 * @param  {number} minVal - minimum value
 * @param  {number} maxVal - maximum value
 * @param  {boolean} inclusive - whether range includes min and max, default true
 * @return {function} function that tests if value is greater than or equal to specified value
 */

function range() {
  var minVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _requireParam2.default)(paramMissing);
  var maxVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _requireParam2.default)(paramMissing);
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var violateMin = (0, _min2.default)(minVal, inclusive);
  var violatesMax = (0, _max2.default)(maxVal, inclusive);
  return (0, _skipEmpty2.default)(function (value) {
    if (violateMin(value) || violatesMax(value)) {
      return inclusive ? 'Must be between ' + minVal + ' and ' + maxVal : 'Must be greater than ' + minVal + ' and less than ' + maxVal;
    }
  });
}

exports.default = range;