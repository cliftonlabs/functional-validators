'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

var _requireParam = require('./util/requireParam');

var _requireParam2 = _interopRequireDefault(_requireParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paramMissing = 'You must specify a value when validating with min';

/**
 * Tests that a value is greater than or equal to a value
 * @param  {number} comparisonValue - value to compare against
 * @param  {boolean} inclusive - whether minimum value is valid, default true
 * @return {function} function that tests if value is greater than or equal to specified value
 */
function min() {
  var comparisonValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _requireParam2.default)(paramMissing);
  var inclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return (0, _skipEmpty2.default)(function (value) {
    if (!(inclusive ? value >= comparisonValue : value > comparisonValue)) {
      return inclusive ? 'Must be at least ' + comparisonValue : 'Must be greater than ' + comparisonValue;
    }
  });
}

exports.default = min;