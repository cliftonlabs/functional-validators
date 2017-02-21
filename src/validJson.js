/**
 * Tests that a value is parseable as JSON (using JSON.parse)
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
const validJson = value => {
  try {
    JSON.parse(value);
  } catch(e) {
    return `Invalid JSON. ${e}`;
  }
}

export default validJson;
