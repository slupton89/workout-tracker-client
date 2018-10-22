import React from 'react';
import {connect} from 'react-redux';
require('./log-simple.css');

export function LogSimple(props) {


  const logs = props.logs.map((log, index) => {
    return (
      <li className='log-item' key={index}>
      <h1>{log.workoutType}</h1>
      <h2>{log.distance}</h2>
      <h2>{log.createdAt}</h2>
      </li>
    )
  })

  return (
    <div className='workouts-simple'>
      <ol className='workout-list'>
        {logs}
      </ol>
    </div>
  )
}

const mapStateToProps = state => ({
    logs: state.logs.logs
})

export default connect(mapStateToProps)(LogSimple);