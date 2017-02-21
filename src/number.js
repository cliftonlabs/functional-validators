import skipEmpty from './util/skipEmpty';
import toNumber from 'lodash.tonumber';
import isFinite from 'lodash.isfinite';

/**
 * Tests that a value is a number (int or float))
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const number = value =>
  !isFinite(toNumber(value)) &&
  'Must be a number';

export default skipEmpty(number);
