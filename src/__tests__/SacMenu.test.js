import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import SacMenu from '../components/SacMenu';

it('renders without crashing', () => {
  // shallow rendering this test only renders <Nav> and doesn’t go deeper.
  shallow(<SacMenu />);
});

it('renders home message', () => {
  const wrapper = shallow(<SacMenu />);
  const home = <NavLink className="navBarBrandLink" to="/">Home</NavLink>;
  console.log(wrapper.debug());
  expect(wrapper.contains(home)).toEqual(true);
});