import { expect } from 'chai';
import integer from './integer';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('integer', () => {
  const rules = { foo: [integer] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be an integer' };

  it('return error for floats', () => {
    expect(validate({ foo: 123.123 })).to.eql(expectedResult);
  });

  it('returns an error for strings that do not parse to integers', () => {
    expect(validate({ foo: 'asdf' })).to.eql(expectedResult);
  });

  it('does not return an error for strings that do parse to integers', () => {
    expect(validate({ foo: '123' })).to.not.have.property('foo');
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });
});
