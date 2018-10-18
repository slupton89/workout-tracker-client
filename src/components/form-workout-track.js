import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {postWorkout} from './actions/logging';

export function TrackWorkout(props) {
  return (
    <div className='track-form'>
      <form onSubmit={props.handleSubmit(values =>
        props.dispatch(postWorkout(values)))
      }>
        {/* dropdown selection maybe? */}
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' />
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' />

        <h1>42:09:24</h1>
        <button>Start/Stop</button>
        {/* set date based on submit time */}
        <button>Submit</button>
      </form>
    </div>
  )
}

  export default reduxForm({
    form: 'track'
  })(TrackWorkout);