import React from 'react';
import {connect} from 'react-redux';

export function LogDetail(props) {


  const logs = props.logs.map((log, index) => {
    return (
      <div className='log-item' key={index}>
      <h1>{log.workoutType}</h1>
      <h2>{log.distance}</h2>
      <h2>{log.createdAt}</h2>
      </div>
    )
  })

  return (
    <div className='log-detail'>

    </div>
  )
}

const mapStateToProps = state => ({
    logs: state.logs.logs
})

export default connect(mapStateToProps)(LogDetail);