import isEmpty from './isEmpty';

const skipEmpty = validator => value => {
  if (!isEmpty(value)) {
    return validator(value);
  }
};

export default skipEmpty;
