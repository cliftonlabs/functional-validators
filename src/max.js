import skipEmpty from './util/skipEmpty';
import requireParam from './util/requireParam';

const paramMissing = 'You must specify a value when validating with min';

/**
 * Tests that a value is less than or equal to a value
 * @param  {number} comparisonValue - value to compare against
 * @return {function} function that tests if value is greater than or equal to specified value
 */
function max(comparisonValue = requireParam(paramMissing), inclusive = true) {
  return skipEmpty(value => {
    if (!(inclusive ? value <= comparisonValue : value < comparisonValue)) {
      return inclusive ?
        `Must be less than or equal to ${comparisonValue}` :
        `Must be less than ${comparisonValue}`;
    }
  });
}

export default max;
