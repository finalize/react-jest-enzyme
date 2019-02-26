import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByClassName, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {success: false};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
}

it('renders without error', () => {
  const wrapper = setup({ success: false });
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

it('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
