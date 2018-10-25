import React from 'react';
import {LogWorkout} from '../components/form-workout-log';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

describe('<LogWorkout />', () => {
  it('Should render without crashing', () => {
    shallow(
    <Provider store={store}>
      <LogWorkout />
    </Provider>);
  });

  it('Should fire logIn callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <LogWorkout onSubmit={callback}/>
      </Provider>);
    const type = 'Test';
    const dis = '123';
    const start = '1540125064434';
    const end = '1540425064434';
    wrapper.find('input[id="workoutType"]').value = type;
    wrapper.find('input[id="distance"]').value = dis;
    wrapper.find('input[id="startTime"]').value = start;
    wrapper.find('input[id="endTime"]').value = end;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  });


})