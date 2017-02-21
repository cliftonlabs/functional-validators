import isEmpty from './util/isEmpty';

/**
 * Tests that a value has less than or equal to maximum length
 * @param  {integer} max - maximum length
 * @return {function} function that tests if value has length less than or equal to max
 */
function maxLength(max) {
  if (typeof max === 'undefined') {
    throw new Error('You must specify a maximum length when validating with maxLength');
  }
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export default maxLength;
