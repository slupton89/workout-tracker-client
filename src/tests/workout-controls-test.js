import React from 'react';
import WorkoutControls from '../components/workout-controls';
import {shallow} from 'enzyme';


describe('<WorkoutControls />', () => {
  it('Should render without crashing', () => {
    shallow(<WorkoutControls />);
  });


})