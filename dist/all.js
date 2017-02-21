"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  var getErrors = Array.isArray(validators) ? function (value) {
    return value.map(function (v) {
      return validators.reduce(function (prevError, validator) {
        return prevError || validator(v);
      }, undefined);
    });
  } : function (value) {
    return value.map(function (v) {
      return validators(v);
    }).filter(function (result) {
      return result;
    });
  };

  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var errors = getErrors(value);
    return errors.length > 0 ? errors : undefined;
  };
}

exports.default = all;