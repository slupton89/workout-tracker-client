import React from 'react';
import {connect} from 'react-redux';
import {deleteWorkout} from './actions/logs';
import moment from 'moment';
import {Link} from 'react-router-dom';

export function LogDetail(props) {
    if(props.currentLog) {

      const createdAt = moment(Date(props.currentLog.startedAt)).format("MM/DD/YY hh:mm");
      const endedAt = moment(Date(props.currentLog.endedAt)).format("MM/DD/YY hh:mm");
      const totalTime = moment(Date(props.currentLog.endedAt - props.currentLog.startedAt)).format("HH:mm:ss");
      return (
        <div>

        <h2>Workout Type</h2>
        <h2>{props.currentLog.workoutType}</h2>
        <h2>Distance</h2>
        <p>{props.currentLog.distance}</p>
        <h2>Duration</h2>
        <p>{totalTime}</p>
        <h2>Started At</h2>
        <p>{createdAt}</p>
        <h2>Ended At</h2>
        <p>{endedAt}</p>
        <h2>Additional Comments</h2>
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


    </div>
  )
}

const mapStateToProps = state => ({
    currentLog: state.logs.currentLog
})

export default connect(mapStateToProps)(LogDetail);