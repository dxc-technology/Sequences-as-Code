import React from 'react';
import { shallow } from 'enzyme';
import MissionPage from '../components/MissionPage';
import ImageUrl from '../components/ImageUrl';

it('renders without crashing', () => {
  // shallow rendering this test only renders <MissionPage> and doesn’t go deeper.
  shallow(<MissionPage />);
});

it('renders correct component for designated title', () => {
    const wrapper = shallow(<MissionPage title={"sachelp"} />);
    const title = <h1>Help</h1>;
    console.log(wrapper.debug());
    expect(wrapper.contains(title)).toEqual(true);
});

it('renders correct sequence for designated title', () => {
  const wrapper = shallow(<MissionPage title={"sachelp"} />);
  const yourmission = <ImageUrl title="sachelp" url="overview.svg" description="Overview" />;
  //console.log(wrapper.debug())
  expect(wrapper.contains(yourmission)).toEqual(true);
});

it('renders a sequence with a header', () => {
  const wrapper = shallow(<MissionPage title={"sachelp"} />);
  const header = <h2>Getting Started</h2>;
  //console.log(wrapper.debug())
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders a sequence without a header', () => {
  const wrapper = shallow(<MissionPage title={"sachelp"} />);
  const header = <h2>Your Mission</h2>;
  //console.log(wrapper.debug())
  expect(wrapper.contains(header)).toEqual(false);
});