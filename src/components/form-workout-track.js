import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {postWorkout} from './actions/logs';
import moment from 'moment';
require('./form-workout-track.css');

export function TrackWorkout(props) {

  let startTime = 0;
  let endTime;
  let totalTime;

  const stopwatch = () => {
    if(startTime === 0) {
      startTime = new Date();
    } else {
      endTime = new Date();
      totalTime = endTime - startTime;
    }
  }



  return (
    <div className='track-form'>
      <form onSubmit={props.handleSubmit(values => {

        props.dispatch(postWorkout({...values, startedAt: startTime, endedAt: endTime}))
      }
        )
      }>
        {/* dropdown selection maybe? */}
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' />
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' />

        <h1>{totalTime}</h1>
        <button onClick={(e) => {
          e.preventDefault();
          stopwatch();
          }}>Start/Stop</button>
        <button onClick={(e) => {
          e.preventDefault();
          startTime = 0;
          endTime = 0;
          totalTime = 0;
          }}>Reset</button>
        {/* set date based on submit time */}
        <button>Submit</button>
      </form>
    </div>
  )
}

  export default reduxForm({
    form: 'track'
  })(TrackWorkout);