import number from './number';
import skipEmpty from './util/skipEmpty';

/**
 * Tests that a value is a valid latitude
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const latitude = value =>
  number(value) ||
  ((value > 90 || value < -90) && 'Must be a valid latitude');

export default skipEmpty(latitude);
