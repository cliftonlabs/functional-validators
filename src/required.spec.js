import { expect } from 'chai';
import required from './required';
import createValidator from './util/createValidator';

describe('required', () => {
  const rules = { foo: [required] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Required' };

  it('returns an error for null values', () => {
    expect(validate({ foo: null })).to.eql(expectedResult);
  });

  it('returns an error for a blank string', () => {
    expect(validate({ foo: '' })).to.eql(expectedResult);
  });

  it('returns an error for undefined', () => {
    expect(validate({ foo: undefined })).to.eql(expectedResult);
  });

  it('returns an error for whitespace', () => {
    expect(validate({ foo: '   ' })).to.eql(expectedResult);
  });

  it('does not return an error for 0', () => {
    expect(validate({ foo: 0 })).to.not.have.property('foo');
  });

});
