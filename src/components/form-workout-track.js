import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {postWorkout} from './actions/logs';
import {connect} from 'react-redux';
import moment from 'moment';
import {runTimer, endTimer, clearTimer, tick} from './actions/timer';
import { Redirect } from 'react-router-dom';
require('./form-workout-track.css');


export function TrackWorkout(props) {
  return (
    <div className='track-form'>
      <form onSubmit={props.handleSubmit(values => {
        props.dispatch(postWorkout({...values, startedAt: props.startTime, endedAt: props.endTime}));
      }
        )
      }>
        {/* dropdown selection maybe? */}
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' />
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' />

        <h1>{props.currentTime}</h1>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(runTimer());
          tick(props.dispatch);
          }}>Start</button>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(endTimer());
          console.log(props.endTime);
          }}>Stop</button>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(clearTimer());
          }}>Reset</button>


          <button>Submit</button>

      </form>
    </div>
  )
}

  const mapStateToProps = state => ({
    startTime: state.timer.startTime,
    endTime: state.timer.endTime,
    totalTime: state.timer.totalTime,
    currentTime: state.timer.currentTime,
    logs: state.logs.logs,
    state: state
  })

  TrackWorkout = connect(mapStateToProps)(TrackWorkout);

  export default reduxForm({
    form: 'track'
  })(TrackWorkout);