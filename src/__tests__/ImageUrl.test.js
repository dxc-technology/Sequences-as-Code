import React from 'react';
import { shallow } from 'enzyme';
import ImageUrl from '../components/ImageUrl';

it('renders without crashing', () => {
  // shallow rendering this test only renders <ImageUrl> and doesn’t go deeper.
  shallow(<ImageUrl title={"sachelp"} url={"overview.svg"} description={"Overview}"} />);
});