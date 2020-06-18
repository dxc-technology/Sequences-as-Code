import React from 'react';
import { shallow } from 'enzyme';
import Home from "../pages/HomePage";

it('renders without crashing', () => {
  // shallow rendering this test only renders <Nav> and doesn’t go deeper.
  shallow(<Home />);
});