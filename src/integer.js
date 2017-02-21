import skipEmpty from './util/skipEmpty';

/**
 * Tests that a value is an integer
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const integer = value =>
  !(Number.isInteger(parseInt(value, 10)) && parseInt(value, 10) === parseFloat(value)) &&
  'Must be an integer';

export default skipEmpty(integer);
