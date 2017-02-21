import { expect } from 'chai';
import format from './format';
import createValidator from './util/createValidator';

describe('format', () => {
  const rules = { foo: format(/bar/) };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Invalid format' };

  it('throws error if regex is not provided', () => {
    expect(format).to.throw(Error, /provide/);
  });

  it('returns an error if regex not matched', () => {
    expect(validate({ foo: 'baz' })).to.eql(expectedResult);
  });

  it('does not return an error if regex is matched', () => {
    expect(validate({ foo: 'bazbarbaz' })).to.not.have.property('foo');
  });
});
