import { expect } from 'chai';
import createValidator from './createValidator';

describe('createValidator', () => {
  it('creates a validator from a set of rules', () => {
    const rules = {
      name: [v => { if (!v) { return 'Required' } }], // require to be truthy
      confirmName: [(v, d) => { if (v !== d.name) { return 'Does not match' } }] // require to match name
    };
    const validator = createValidator(rules);
    const values = { name: '', confirmName: 'foo' };
    const results = validator(values);

    expect(results).to.eql({ name: 'Required', confirmName: 'Does not match' });
  });
});

