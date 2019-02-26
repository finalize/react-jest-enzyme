import checkPropTypes from 'check-prop-types';

export const findByClassName = (wrapper, val) => {
  return wrapper.find(`.${val}`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
