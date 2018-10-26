import React from 'react';
import {connect} from 'react-redux';
import {deleteWorkout} from './actions/logs';
import moment from 'moment';
import {Link} from 'react-router-dom';

export function LogDetail(props) {
    if(props.currentLog) {
      console.log(props.currentLog.startedAt);
      const startedAt = moment(props.currentLog.startedAt).format("MM/DD/YY hh:mm a");
      const endedAt = moment(props.currentLog.endedAt).format("MM/DD/YY hh:mm a");
      return (
        <div className='detail-log'>

          <h2>Workout Type</h2>
          <p>{props.currentLog.workoutType}</p>
          <h2>Intensity/Distance</h2>
          <p>{props.currentLog.distance}</p>
          <h2>Started At</h2>
          <p>{startedAt}</p>
          <h2>Ended At</h2>
          <p>{endedAt}</p>
          <h2>Comments</h2>
          <p>{props.currentLog.comments}</p>


        <Link to='/dashboard'><button onClick={() => {
          props.dispatch(deleteWorkout(props.currentLog._id))
        }}>Delete</button>
        </Link>
        </div>
      )
    }
  return (
    <div className='log-detail'>
      <h1>No Log Found</h1>
    </div>
  )
}

const mapStateToProps = state => ({
    currentLog: state.logs.currentLog
})

export default connect(mapStateToProps)(LogDetail);