import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Redirect from 'react-router-dom/Redirect';
import Input from './input';
import {postWorkout} from './actions/logs';

export function LogWorkout(props) {

  return (
    <div className='log-form'>
      <form onSubmit={props.handleSubmit(values => {
        return Promise.all([
          props.dispatch(postWorkout(values)),
        ])
        .then(() => { return <Redirect to='/dashboard' />})
      })

      }>
        {/* dropdown selection maybe? */}
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' />
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' />
        <Field name='startTime' id='startTime' component={Input} element='input'
          type='time' label='Start Time' />
        <Field name='endTime' id='endTime' component={Input} element='input'
          type='time' label='End Time' />

        <button>Submit</button>
      </form>
    </div>
  )
}

  export default reduxForm({
    form: 'log'
  })(LogWorkout);
