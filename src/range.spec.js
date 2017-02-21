import { expect } from 'chai';
import range from './range';
import createValidator from './util/createValidator';
import { BLANK_VALUES } from './_testUtils';

describe('range', () => {
  describe('when inclusive true', () => {
    const rules = { foo: [range(0, 100)] };
    const validate = createValidator(rules);
    const expected = { foo: 'Must be between 0 and 100' };

    it('throws an error if value is not specified', () => {
      expect(range).to.throw(Error, /specify/);
    });

    it('does not return an error for blank values', () => {
      BLANK_VALUES.forEach(val => expect(validate({ foo: val })).to.not.have.property('foo'));
    });

    it('returns an error for values more than max', () => {
      expect(validate({ foo: 101 })).to.eql(expected);
    });

    it('returns an error for values less than min', () => {
      expect(validate({ foo: -1 })).to.eql(expected);
    });

    it('does not return an error for values in range or equal to max or min', () => {
      [0, .01, 50, 99.99, 100].forEach(v => expect(validate({ foo: v })).to.not.have.property('foo'));
    });
  });

  describe('when inclusive is false', () => {
    const rules = { foo: [range(0, 100, false)] };
    const validate = createValidator(rules);
    const expected = { foo: 'Must be greater than 0 and less than 100' };

    it('returns an error for values equal to min or max', () => {
      [0, 100].forEach(v => expect(validate({ foo: v })).to.eql(expected));
    });
  })
});
