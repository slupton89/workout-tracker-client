import React from 'react';
import LogDetail from '../components/log-detail';
import {shallow} from 'enzyme';


describe('<LogDetail />', () => {
  it('Should render without crashing', () => {
    shallow(<LogDetail />);
  });

})