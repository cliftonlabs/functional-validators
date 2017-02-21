import isEmpty from './util/isEmpty';

/**
 * Tests that a value is not blank (null, undefined, empty string)
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const required = value =>
  isEmpty(value) &&
  'Required';

export default required;
