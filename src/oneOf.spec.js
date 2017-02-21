import { expect } from 'chai';
import oneOf from './oneOf';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('oneOf', () => {
  const rules = { foo: [oneOf(['bar', 'baz'])] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be one of: bar, baz' };

  it('throws an error if array is not specified', () => {
    expect(oneOf).to.throw(Error, /specify/);
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });

  it('returns an error for values not in enumeration', () => {
    expect(validate({ foo: 'buzz' })).to.eql(expectedResult);
  });

  it('does not return an error for values in enumeration', () => {
    ['bar', 'baz'].forEach(v => expect(validate({ foo: v })).to.not.have.property('foo'));
  });
});

