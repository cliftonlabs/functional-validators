import requireParam from './util/requireParam';

const paramMissing = 'You must specify a field to match when validating with match';

/**
 * Tests that a value is equal to another field
 * @param  {string} field     [description]
 * @param  {string} fieldName [description]
 * @return {function} Function that tests if values are equal
 */
const match = (field = requireParam(paramMissing), fieldName) => (value, data) =>
  data &&
  value !== data[field] &&
  `Does not match${fieldName ? ` ${fieldName}` : ''}`;

export default match;
