import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {postWorkout} from './actions/logs';
import {connect} from 'react-redux';
import {runTimer, endTimer, clearTimer, tick} from './actions/timer';
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
          type='text' label='Workout Type' aria-label={'workout type field'}/>
        {/* in combo with above selector, only show if walk, run, cycle */}
        <Field name='distance' id='distance' component={Input} element='input'
          type='number' label='Distance' aria-label={'distance field'}/>

        <h1>{props.currentTime}</h1>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(runTimer());
          tick(props.dispatch);
          }} className='startTimerBtn' aria-label={'start timer button'}>Start</button>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(endTimer());
          }}className='stopTimerBtn' aria-label={'stop timer button'}>Stop</button>

        <button onClick={(e) => {
          e.preventDefault();
          props.dispatch(clearTimer());
          }}className='resetTimerBtn' aria-label={'reset timer button'}>Reset</button>


          <button aria-label={'submit button'}>Submit</button>

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