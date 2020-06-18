import React from 'react';
import { shallow } from 'enzyme';
import App from "../App";

it('renders without crashing', () => {
  // shallow rendering this test only renders <Nav> and doesn’t go deeper.
  shallow(<App />);
});
