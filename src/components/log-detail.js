import React from 'react';
import {connect} from 'react-redux';
import {deleteWorkout} from './actions/logs';

export function LogDetail(props) {
    if(props.currentLog) {
      return (
        <div>

        <h2>Workout Type</h2>
        <h2>{props.currentLog.workoutType}</h2>
        <h2>Distance</h2>
        <p>{props.currentLog.distance}</p>
        <h2>Started At</h2>
        <p>{props.currentLog.startedAt}</p>
        <h2>Ended At</h2>
        <p>{props.currentLog.endedAt}</p>
        <h2>Additional Comments</h2>
        <p>{props.currentLog.comments}</p>

        <button>Edit</button>
        <button onClick={() => {
          props.dispatch(deleteWorkout(props.currentLog._id))
        }}>Delete</button>
        </div>
      )
    }
  return (
    <div className='log-detail'>


    </div>
  )
}

const mapStateToProps = state => ({
    currentLog: state.logs.currentLog
})

export default connect(mapStateToProps)(LogDetail);