import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import Form from 'redux-form/lib/Form';
import {Route, Link} from 'react-router-dom';
import {postWorkout} from './actions/logging'

export function WorkoutForm() {

  const logWorkout = function(){
    return (
      <Form onSubmit={this.props.handleSubmit(values =>
        this.props.dispatch(postWorkout(values)))
      }>
        {/* dropdown selection maybe? */}
        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' />
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' />
        <Field name='startTime' id='startTime' component={Input} element='input'
          type='datetime-local' label='Start Time' />
        <Field name='endTime' id='endTime' component={Input} element='input'
          type='datetime-local' label='End Time' />
      </Form>
    )
  }

  const trackWorkout = function() {
    return (
      <Form onSubmit={this.props.handleSubmit(values =>
        this.props.dispatch(postWorkout(values)))
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
      </Form>
    )
  }

  return (
    <div className='log'>
      <div className='workout-controls'>
        <Link to='/logs/track'><button>Track Workout</button></Link>
        <Link to='/logs/log'><button>Log Workout</button></Link>
      </div>
      <div className='workout-log'>
        <Route exact path='/logs/track' component={trackWorkout} />
        <Route exact path='/logs/log' component={logWorkout} />
      </div>
    </div>


  )
}

export default reduxForm({
  form: WorkoutForm
});