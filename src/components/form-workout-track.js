import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import Input from './input';
import {postWorkout} from './actions/logs';
import {connect} from 'react-redux';
import {runTimer, endTimer, clearTimer, tick} from './actions/timer';
import Timer from './Timer';
require('./form-workout-track.css');


export function TrackWorkout(props) {

  let startBtn = (!props.running) ?
      <button onClick={(e) => {
        e.preventDefault();
        props.dispatch(runTimer());
        tick(props.dispatch);
        }} className='startTimerBtn' aria-label={'start timer button'}>Start</button>
      : null;

  let StopBtn = (props.running) ?
    <button onClick={(e) => {
      e.preventDefault();
      props.dispatch(endTimer());
      }}className='stopTimerBtn' aria-label={'stop timer button'}>Stop</button>
    : null;
  let resetBtn = (props.startTime > 0) ?
    <button onClick={(e) => {
      e.preventDefault();
      props.dispatch(clearTimer());
      }}className='resetTimerBtn' aria-label={'reset timer button'}>Reset</button>
    : null;


  return (
    <div className='track-form'>
      <form onSubmit={props.handleSubmit(values => {
        props.dispatch(postWorkout({...values, startedAt: props.startTime, endedAt: props.endTime}));
      })}>

        <Field name='workoutType' id='workoutType' component={Input} element='input'
          type='text' label='Workout Type' aria-label={'workout type field'}/>

        <Field name='distance' id='distance' component={Input} element='input'
          type='text' label='Intensity/Distance' aria-label={'distance field'}/>

        <Field name='comments' id='comments' component={Input} element='textarea'
          type='text' multiLine={true} rows={2} label='Comments' aria-label={'distance field'}/>

        {/* {timer} */}
        <br></br>
        <h1>Time:</h1>
        <h2>{props.currentTime}</h2>

        {startBtn}
        {StopBtn}
        {resetBtn}

        <br></br>
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
    running: state.timer.running,
    logs: state.logs.logs,
    state: state
  })

  TrackWorkout = connect(mapStateToProps)(TrackWorkout);

  export default reduxForm({
    form: 'track'
  })(TrackWorkout);