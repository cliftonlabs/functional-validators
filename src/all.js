/**
 * Makes a validator run on each item in an array.
 *
 * @example
 * const subvalidator = createValidator({ id: [required] });
 * cond validator = createValidator({ items: [all(subvalidator)] });
 * validate({ items: [{ id: 1 }, { id: 2 }] }) // { items: []}
 * validate({ items: [{ id: 1 }, { id: null }] }) // { items: [{}, {id: 'Required'}] }
 *
 * @param  {function|Array} validator   - one or more (array) validator functions that receive value and data, returns error
 * @return {function} function that runs validator on each item in an array
 */
function all(validators) {
  const getErrors = Array.isArray(validators) ?
    value => value.map(v => validators.reduce((prevError, validator) => prevError || validator(v), undefined)) :
    value => value.map(v => validators(v)).filter(result => result);

  return (value = []) => {
    const errors = getErrors(value);
    return errors.length > 0 ?
      errors :
      undefined;
  }
}

export default all;
