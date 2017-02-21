import joinRules from './util/joinRules';

/**
 * Makes a field validator only run if a condition is met.
 *
 * @example
 * const tester = when((val, data) => data.id, required);
 * const validate = createValidator({ password: when((val, data) => data.id, required) });
 * validate({ password: undefined }) // {}
 * validate({ password: undefined, id: 123 }) // { password: 'Required' }
 *
 * @param  {function} conditionFn - function that receives value and data, returns truthy if condition met
 * @param  {function|Array} validator - validator function or array of validator functions that receives value and data, returns error
 * @return {function} function that runs validator if condition is met
 */
const when = (conditionFn, rules) => {
  const validator = Array.isArray(rules) ?
    joinRules(rules) :
    rules;

  return (value, data) =>
    conditionFn(value, data) &&
    validator(value, data);
}

export default when;
