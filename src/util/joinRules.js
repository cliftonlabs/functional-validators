const joinRules = rules => (value, data) =>
  rules
    .map(rule => rule(value, data))
    .filter(error => !!error)[0];

export default joinRules;
