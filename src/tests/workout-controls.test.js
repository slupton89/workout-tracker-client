import React from 'react';
import WorkoutControls from '../components/workout-controls';
import {shallow, mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';



describe('<WorkoutControls />', () => {
  it('Should render without crashing', () => {
    shallow(<WorkoutControls />);
  });


  it('Should link to another page', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
    <Router history={history}>
      <WorkoutControls />
    </Router>);
    const trackBtn = wrapper.find('.trackBtn');
    expect(trackBtn.exists()).toEqual(true);
    const logBtn = wrapper.find('.logBtn');
    expect(logBtn.exists()).toEqual(true);
    const trackLink = wrapper.find('#trackLink').first();
    expect(trackLink.prop('to')).toEqual('/dashboard/logs/track');
    const logLink = wrapper.find('#logLink').first();
    expect(logLink.prop('to')).toEqual('/dashboard/logs/log');
  })

})