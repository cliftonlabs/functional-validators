import skipEmpty from './util/skipEmpty';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

/**
 * Tests that a string is formatted as an email
 * @param  {string} value - string to check
 * @return {string|undefined} error message if invalid
 */
const email = value =>
  !EMAIL_REGEX.test(value) &&
  'Invalid email address';

export default skipEmpty(email);
