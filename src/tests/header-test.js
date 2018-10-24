import React from 'react';
import Header from '../components/header';
import {shallow} from 'enzyme';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    shallow(<Header />);
  });

  it('Should log out user', () => {
    const wrapper = shallow(<Header />);
    const btn = wrapper.find('logoutBtn');
    btn.simulate('click')
  })

})