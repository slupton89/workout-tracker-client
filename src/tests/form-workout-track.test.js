import React from 'react';
import {TrackWorkout} from '../components/form-workout-track';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

describe('<TrackWorkout />', () => {
  it('Should render without crashing', () => {
    shallow(
    <Provider store={store}>
      <TrackWorkout />
    </Provider>);
  });

  it('Should fire logIn callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <TrackWorkout onSubmit={callback}/>
      </Provider>);
    const type = 'Test';
    const dis = '123';
    wrapper.find('input[id="workoutType"]').value = type;
    wrapper.find('input[id="distance"]').value = dis;
    wrapper.find('startTimerBtn').simulate('click');
    wrapper.find('stopTimerBtn').simulate('click');
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  });


})