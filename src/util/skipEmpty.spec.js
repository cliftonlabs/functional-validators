import { expect } from 'chai';
import skipEmpty from './skipEmpty';
import { BLANK_VALUES } from '../_testUtils';

function isTest(value) {
  if (value !== 'test') {
    return 'Error';
  }
}

describe('skipEmpty', () => {
  it('makes the wrapped validator NOT return an error for an empty field', () => {
    BLANK_VALUES.forEach(val => {
      expect(isTest(val)).to.equal('Error');
      expect(skipEmpty(isTest)(val)).to.equal(undefined);
    });
  });

  it('does not effect validator if value is not empty', () => {
    expect(skipEmpty(isTest)('nottest')).to.equal('Error');
  });
})
