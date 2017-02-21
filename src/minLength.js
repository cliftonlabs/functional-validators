import isEmpty from './util/isEmpty';
import requireParam from './util/requireParam';

/**
 * Tests that a value has a specified minimum length
 * @param  {integer} min - required length
 * @return {function} function that tests if value has required length
 */
function minLength(min = requireParam('You must specify a minimum length when validating with minLength')) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return Array.isArray(value) ?
        `At least ${min} item(s) required` :
        `Must be at least ${min} characters`;
    }
  };
}

export default minLength;
