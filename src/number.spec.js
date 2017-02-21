import { expect } from 'chai';
import number from './number';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('number', () => {
  const rules = { foo: [number] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be a number' };

  it('returns an error for strings that do not parse to integers or floats', () => {
    expect(validate({ foo: 'asdf' })).to.eql(expectedResult);
  });

  it('does not return an error for integers or floats', () => {
    const validValues = [-123, 0, 123, -123.45, 0.0, 123.45];
    validValues.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });

  it('returns an error for NaN', () => {
    expect(validate({ foo: NaN })).to.eql(expectedResult);
  });

  it('returns an error for -Infinity, Infinity', () => {
    expect(validate({ foo: -Infinity })).to.eql(expectedResult);
    expect(validate({ foo: Infinity })).to.eql(expectedResult);
  });

  it('does not return an error for strings that parse to integers', () => {
    expect(validate({ foo: '123' })).to.not.have.property('foo');
  });

  it('does not return an error for strings that parse to floats', () => {
    expect(validate({ foo: '123.456' })).to.not.have.property('foo');
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });
});
