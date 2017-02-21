import { expect } from 'chai';
import latitude from './latitude';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('latitude', () => {
  const rules = { foo: [latitude] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be a valid latitude' };
  const invalidNumberResult = { foo: 'Must be a number' };

  it('returns an error for strings that do not parse to valid latitude', () => {
    expect(validate({ foo: 'asdf' })).to.eql(invalidNumberResult);
  });

  it('does not return an error for valid latitude', () => {
    const validValues = [-78.6, 0, 78.6, -90, -90.0, 90.0];
    validValues.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });

  it('returns an error for invalid latitude numbers', () => {
    const invalidValues = [-178.6, -178, 200, 200.0];
    invalidValues.forEach(val => expect(validate({ foo: val })).to.eql(expectedResult));
  });

  it('returns an error for NaN as latitude', () => {
    expect(validate({ foo: NaN })).to.eql(invalidNumberResult);
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });
});
