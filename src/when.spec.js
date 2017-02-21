import { expect } from 'chai';
import when from './when';
import maxLength from './maxLength';
import required from './required';
import createValidator from './util/createValidator';

describe('when', () => {
  const validate = createValidator({ password: when((val, data) => data.id, required) });

  it('runs validator if condition is met', () => {
    expect(validate({ password: undefined, id: 123 })).to.eql({ password: 'Required' });
  });

  it('does not run validator if condition is not met', () => {
    expect(validate({ password: undefined })).to.not.have.property('password');
  });

  it('handles an array of rules', () => {
    const validateMult = createValidator({
      name: [
        when(
          (val, data) => data.id,
          [required, maxLength(3)]
        ),
      ],
    });

    expect(validateMult({ id: 123, name: 'asdfasdf' })).to.have.property('name', 'Must be no more than 3 characters');
  });
});
