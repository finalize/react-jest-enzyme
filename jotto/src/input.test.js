import React from 'react';
import {shallow} from 'enzyme';

import {findByClassName, storeFactory} from '../test/testUtils';
import Input from './input';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
  console.log(wrapper.debug());
}

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })
    test('renders component without error', () => {
      const component = findByClassName(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByClassName(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByClassName(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been gueesed', () => {
    test('renders component without error', () => {

    });
    test('does not renders input box', () => {

    });
    test('does not renders submit button', () => {

    });
  });
});

describe('update state', () => {

});
