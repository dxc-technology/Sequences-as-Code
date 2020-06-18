import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../components/SearchPage';
import ImageUrl from '../components/ImageUrl';

it('renders without crashing', () => {
  // shallow rendering this test only renders <SearchPage> and doesn’t go deeper.
  shallow(<SearchPage/>);
});

it('renders not found message', () => {
  const wrapper = shallow(<SearchPage />);
  const notfound = <h4>No sequences found with the specified key words in their titles or matching the specified UML tag.</h4>;
  console.log(wrapper.debug());
  wrapper.find('#searchSequencesButton').simulate('click');
  expect(wrapper.contains(notfound)).toEqual(true);
});

it('renders expected search results', () => {
  const wrapper = shallow(<SearchPage />);
  const found = <ImageUrl title="sachelp" url="overview.svg" description="Help->Overview" />;
  wrapper.setState({ searchTitle: "Overview" });
  wrapper.instance().handleSearchSequences();
  console.log(wrapper.debug());
  expect(wrapper.contains(found)).toEqual(true);
});

test("onChange() is called upon changing the title keyword search field", () => {
  const value = "Overview";
  const wrapper = shallow(<SearchPage/>);
  const found = <ImageUrl title="sachelp" url="overview.svg" description="Help->Overview" />;
  wrapper.find('#searchSequencesInputTitle').simulate('change',{target: {value}});
  wrapper.instance().handleSearchSequences();
  console.log(wrapper.debug());
  expect(wrapper.contains(found)).toEqual(true);
});

test("onChange() is called upon changing the uml tag search field", () => {
  const value = "Overview";
  const wrapper = shallow(<SearchPage/>);
  const found = <ImageUrl title="sachelp" url="overview.svg" description="Help->Overview" />;
  wrapper.find('#searchSequencesInputUMLTag').simulate('change',{target: {value}});
  wrapper.instance().handleSearchSequences();
  console.log(wrapper.debug());
  expect(wrapper.contains(found)).toEqual(true);
});