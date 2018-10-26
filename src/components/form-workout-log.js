import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Redirect from 'react-router-dom/Redirect';
import Input from './input';
import {postWorkout} from './actions/logs';

export function LogWorkout(props) {
  const selector = (
    <div>
    <Field name="favoriteColor" component="select">
      <option></option>
      <option value="ff0000">Red</option>
      <option value="00ff00">Green</option>
      <option value="0000ff">Blue</option>
    </Field>
  </div>
  )
  return (
    <div className='log-form'>
      <form onSubmit={props.handleSubmit(values => {
        console.log(values);
        return Promise.all([
          props.dispatch(postWorkout(values)),
        ])
        .then(() => { return <Redirect to='/dashboard' />})
      })

      }>
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' aria-label={'workout type field'}/>
        <Field name='measure' id='measure' component={Input} element='input'
          type='text' label='Intesity/Distance' aria-label={'distance field'}/>
        <Field name='startedAt' id='startedAt' component={Input} element='input'
          type='datetime-local' label='Start Time' aria-label={'start time field'}/>
        <Field name='endedAt' id='endedAt' component={Input} element='input'
          type='datetime-local' label='End Time' aria-label={'end time field'}/>
        <Field name='comments' id='comments' component={Input} element='textarea'
          type='text' multiLine={true} rows={2} label='Comments' aria-label={'distance field'}/>

        <button aria-label={'submit button'}>Submit</button>
      </form>
    </div>
  )
}

  export default reduxForm({
    form: 'log'
  })(LogWorkout);
