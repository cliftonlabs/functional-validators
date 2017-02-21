import number from './number';
import skipEmpty from './util/skipEmpty';

/**
 * Tests that a value is a valid longitude
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const longitude = value =>
  number(value) ||
  ((value > 180 || value < -180) && 'Must be a valid longitude');

export default skipEmpty(longitude);
