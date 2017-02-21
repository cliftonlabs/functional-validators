import trim from 'lodash.trim';

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && trim(value) === '');

export default isEmpty;
