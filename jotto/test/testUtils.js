import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux';

import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

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
