import { expect } from 'chai';
import maxLength from './maxLength';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('maxLength', () => {
  const rules = { foo: [maxLength(5)] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Must be no more than 5 characters' };

  it('throws an error if no max length is specified', () => {
    expect(maxLength).to.throw(Error, /specify/);
  });

  it('return error for strings that are too long', () => {
    expect(validate({ foo: 'asdfasdf' })).to.eql(expectedResult);
  });

  it('does not return an error for strings that are less than max', () => {
    expect(validate({ foo: 'asdf' })).to.not.have.property('foo');
  });

  it('does not return an error for strings that are equal to max', () => {
    expect(validate({ foo: 'asdfg' })).to.not.have.property('foo');
  });

  it('does not return an error for blank values', () => {
    BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
  });
});
