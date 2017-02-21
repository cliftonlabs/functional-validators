import skipEmpty from './util/skipEmpty';
import requireParam from './util/requireParam';

const paramMissing = 'You must specify a value when validating with min';

/**
 * Tests that a value is greater than or equal to a value
 * @param  {number} comparisonValue - value to compare against
 * @param  {boolean} inclusive - whether minimum value is valid, default true
 * @return {function} function that tests if value is greater than or equal to specified value
 */
function min(comparisonValue = requireParam(paramMissing), inclusive = true) {
  return skipEmpty(value => {
    if (!(inclusive ? value >= comparisonValue : value > comparisonValue)) {
      return inclusive ?
        `Must be at least ${comparisonValue}` :
        `Must be greater than ${comparisonValue}`;
    }
  });
}

export default min;
