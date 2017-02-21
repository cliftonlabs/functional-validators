import { expect } from 'chai';
import longitude from './longitude';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('longitude', () => {
  const rules = { foo: [longitude] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be a valid longitude' };
  const invalidNumberResult = { foo: 'Must be a number' };

  it('returns an error for strings that do not parse to valid longitude', () => {
    expect(validate({ foo: 'asdf' })).to.eql(invalidNumberResult);
  });

  it('returns an error for NaN as longitude', () => {
    expect(validate({ foo: NaN })).to.eql(invalidNumberResult);
  });

  it('does not return an error for valid longitude', () => {
    const validValues = [-180, -180.0, -78.6, 0, 78.6, -90, 180.0, 90.0, 0.0000, 22.23456];
    validValues.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });

  it('returns an error for invalid longitude numbers', () => {
    const invalidValues = [-188.6, -188, 200, 200.0];
    invalidValues.forEach(val => expect(validate({ foo: val })).to.eql(expectedResult));
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });
});

