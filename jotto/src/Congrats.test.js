import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByClassName } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByClassName(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it('renders no text when success props is false', () => {
  const wrapper = setup({success: false});
  const component = findByClassName(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it('renders without error', () => {
  const wrapper = setup({success: true});
  const message = findByClassName(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
