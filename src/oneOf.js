import isEmpty from './util/isEmpty';

/**
 * Tests that a value is equal to one of an array of values
 * @param  {Array} enumeration - array of possible values
 * @return {function} function that tests if value matches one of the given values
 */
function oneOf(enumeration) {
  if (!Array.isArray(enumeration)) {
    throw new Error('You must specify an array of values when validating with oneOf');
  }
  return value => {
    if (!isEmpty(value) && enumeration.indexOf(value) === -1) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export default oneOf;
