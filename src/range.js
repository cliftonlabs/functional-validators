import requireParam from './util/requireParam';
import skipEmpty from './util/skipEmpty';
import min from './min';
import max from './max';

const paramMissing = 'You must specify a minimum and a maximum value when validating with range';

/**
 * Tests that a value is within a range
 * @param  {number} minVal - minimum value
 * @param  {number} maxVal - maximum value
 * @param  {boolean} inclusive - whether range includes min and max, default true
 * @return {function} function that tests if value is greater than or equal to specified value
 */

function range(minVal = requireParam(paramMissing), maxVal = requireParam(paramMissing), inclusive = true) {
  const violateMin = min(minVal, inclusive);
  const violatesMax = max(maxVal, inclusive);
  return skipEmpty(value => {
    if (violateMin(value) || violatesMax(value)) {
      return inclusive ?
        `Must be between ${minVal} and ${maxVal}` :
        `Must be greater than ${minVal} and less than ${maxVal}`;
    }
  })
}

export default range;
