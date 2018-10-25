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
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' aria-label={'workout type field'}/>
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' aria-label={'distance field'}/>
        <Field name='startTime' id='startTime' component={Input} element='input'
          type='time' label='Start Time' aria-label={'start time field'}/>
        <Field name='endTime' id='endTime' component={Input} element='input'
          type='time' label='End Time' aria-label={'end time field'}/>

        <button aria-label={'submit button'}>Submit</button>
      </form>
    </div>
  )
}

  export default reduxForm({
    form: 'log'
  })(LogWorkout);
