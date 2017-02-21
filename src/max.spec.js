import { expect } from 'chai';
import max from './max';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('max', () => {
  describe('inclusive true', () => {
    const rules = { foo: [max(100)] };
    const validate = createValidator(rules);
    const expectedResult = { foo: 'Must be less than or equal to 100' };

    it('throws an error if value is not specified', () => {
      expect(max).to.throw(Error, /specify/);
    });

    it('does not return an error for blank values', () => {
      BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
    });

    it('returns an error for values more than specified value', () => {
      expect(validate({ foo: 101})).to.eql(expectedResult);
    });

    it('does not return an error for values less than or equal to specified value', () => {
      [0, 1, 99.99].forEach(v => expect(validate({ foo: v })).to.not.have.property('foo'));
    });
  });

  describe('inclusive false', () => {
    const rules = { foo: [max(10, false)] };
    const validate = createValidator(rules);
    const expectedResult = { foo: 'Must be less than 10' };

    it('returns an error for values equal to the maximum', () => {
      expect(validate({ foo: 10 })).to.eql(expectedResult);
    });
  });
});
