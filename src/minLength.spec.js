import { expect } from 'chai';
import minLength from './minLength';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('minLength', () => {
  const rules = { foo: [minLength(5)] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be at least 5 characters' };
  const expectedArrayResult = { foo: 'At least 5 item(s) required' };

  it('throws an error if no max length is specified', () => {
    expect(minLength).to.throw(Error, /specify/);
  });

  it('return error for strings that are too short', () => {
    expect(validate({ foo: 'asdf' })).to.eql(expectedResult);
  });

  it('does not return an error for strings that more than minimum', () => {
    expect(validate({ foo: 'asdfasdf' })).to.not.have.property('foo');
  });

  it('does not return an error for strings that are equal to minimum', () => {
    expect(validate({ foo: 'asdfg' })).to.not.have.property('foo');
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });

  it('returns an error for arrays with less than required length', () => {
    expect(validate({foo: [1, 2, 3, 4]})).to.deep.equal(expectedArrayResult);
  });
});
