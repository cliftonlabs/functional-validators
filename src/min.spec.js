import { expect } from 'chai';
import min from './min';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('min', () => {
  describe('inclusive true', () => {
    const rules = { foo: [min(0)] };
    const validate = createValidator(rules);
    const expectedResult = { foo: 'Must be at least 0' };

    it('throws an error if value is not specified', () => {
      expect(min).to.throw(Error, /specify/);
    });

    it('does not return an error for blank values', () => {
      BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
    });

    it('returns an error for values less than specified value', () => {
      expect(validate({ foo: -123 })).to.eql(expectedResult);
    });

    it('does not return an error for values greater than or equal to specified value', () => {
      [0, 1, 123].forEach(v => expect(validate({ foo: v })).to.not.have.property('foo'));
    });
  });

  describe('inclusive false', () => {
    const rules = { foo: [min(0, false)] };
    const validate = createValidator(rules);
    const expectedResult = { foo: 'Must be greater than 0' };

    it('returns an error for values equal to the minimum', () => {
      expect(validate({ foo: 0 })).to.eql(expectedResult);
    });
  })
});
