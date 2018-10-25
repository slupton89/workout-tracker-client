import React from 'react';
import LogSimple from '../components/log-simple';
import {shallow} from 'enzyme';


describe('<LogSimple />', () => {
  it('Should render without crashing', () => {
    shallow(<LogSimple />);
  });

})