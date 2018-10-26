import React from 'react';
import {connect} from 'react-redux';
import { getWorkoutId } from './actions/logs';
import { Link } from 'react-router-dom';
import moment from 'moment';

require('./log-simple.css');

export function LogSimple(props) {

  const getCurLog = (log) => {
    props.dispatch(getWorkoutId(log));
  }

  const logs = props.logs.map((log, index) => {
    return (
      <Link to={`/dashboard/log/${log._id}`} key={index} >
      <li className='log-item' onClick={() => {
        getCurLog(log._id);
      }
      }>
      <h1>{log.workoutType}</h1>
      <h2>{log.distance}</h2>
      <h2>{moment(log.createdAt).format("MM/DD/YY hh:mm a")}</h2>
      </li>
      </Link>
    )
  })

  return (
    <div className='workouts-simple' id='style-1'>
      <ol className='workout-list'>
        {logs}
      </ol>
    </div>
  )
}

const mapStateToProps = state => ({
    logs: state.logs.logs,
    currentLog: state.logs.currentLog
})

export default connect(mapStateToProps)(LogSimple);