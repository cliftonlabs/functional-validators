`yarn test`
`yarn run test:watch`
`yarn run test:coverage`
`yarn run generate-docs`

# Use

```
import {
  createValidator,
  all,
  required,
  oneOf,
  number,
  validJson,
} from 'functional-validators';

const rules = {
  name: [required],
  isActive: [oneOf([true, false])],
  requestOriginator: [required, number],
  priority: [required, number],
  tirTargeted: [required, oneOf([true, false])],
  samplingRate: [required, number],
  collectingPeriod: [required, number],
  rateTimeUnits: [required, oneOf(["seconds", "hours"])],
  periodTimeUnits: [required, oneOf(["seconds", "hours"])],
  condition: [validJson]
};

export default createValidator(rules);
```
