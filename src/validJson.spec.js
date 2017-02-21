import { expect } from 'chai';
import validJson from './validJson';
import createValidator from './util/createValidator';

describe('validJson', () => {
  const rules = { foo: [validJson] };
  const validate = createValidator(rules);
  const expectedResult = { foo: 'Invalid Json' };

  it('does not return an error for values parseable as json', () => {
    const goodValues = [
      '["asdf", "123"]',
      '{"asdf": 123}',
      '"asdf"',
      '123'
    ];

    goodValues.forEach(v => {
      expect(validate({ foo: v })).to.deep.equal({});
    });
  });

  it('returns an json parse error for values not parseable as json', () => {
    const badValues = {
      '{a}': 'Invalid JSON. SyntaxError: Unexpected token a in JSON at position 1'
    };

    Object.keys(badValues).forEach(v => {
      expect(validate({ foo: v })).to.deep.equal({ foo: badValues[v] });
    });
  });
});
