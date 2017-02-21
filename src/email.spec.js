import { expect } from 'chai';
import email from './email';
import createValidator from './util/createValidator';

describe('email', () => {
  const rules = { foo: [email] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Invalid email address' };

  it('returns an error for improperly formatted emails', () => {
    const invalidEmails = [
      'example.com',
      'person',
      'person@example',
    ];

    invalidEmails.forEach(invalidEmail => {
      expect(validate({ foo: invalidEmail })).to.eql(expectedResult);
    });
  });

  it('does not return an error for a blank value', () => {
    expect(validate({ foo: '' })).to.not.have.property('foo');
  });

  it('does not return an error for properly formatted emails', () => {
    const validEmails = [
      'person@example.com',
      'person.mcperson@example.com',
      'person@example.co.uk',
      'person+sdf@example.com',
    ];

    validEmails.forEach(validEmail => {
      expect(validate({ foo: validEmail })).to.not.have.property('foo');
    });
  });
});
