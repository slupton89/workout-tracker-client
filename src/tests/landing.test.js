import React from 'react';
import Landing from '../components/landing';
import {shallow, mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';



describe('<Landing />', () => {
  it('Should render without crashing', () => {
    shallow(<Landing />);
  });

  it('Should link to registration', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Router history={history}>
      <Landing />
    </Router>);
    expect(wrapper.find('.registerBtn').exists()).toEqual(true);
  })

  it('Should link to login', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Router history={history}>
      <Landing />
    </Router>);
    expect(wrapper.find('.loginBtn').exists()).toEqual(true);
  })

})