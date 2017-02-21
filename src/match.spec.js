import { expect } from 'chai';
import match from './match';
import createValidator from './util/createValidator';

describe('match', () => {
  const rules = { foo: [match('bar', 'Bar')] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Does not match Bar' };

  it('throws error if field is not specified', () => {
    expect(match).to.throw(Error, /specify/);
  });

  it('returns an error if fields are non-null and do not match', () => {
    expect(validate({ foo: 'asdf', bar: 'qwer' })).to.eql(expectedResult);
  });

  it('returns an error if field to match is empty', () => {
    expect(validate({ foo: 'asdf', bar: undefined })).to.eql(expectedResult);
  });

  it('returns proper error message if field name not specified', () => {
    expect(createValidator({ foo: [match('bar')] })({ foo: 'asdf', bar: 'qwer' })).to.eql({ foo: 'Does not match' });
  });
});

