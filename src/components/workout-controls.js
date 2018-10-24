import React from 'react';
import {Link} from 'react-router-dom';


export default function WorkoutControls() {
  return (
      <div className='workout-controls'>
        <Link to='/dashboard/logs/track'><button>Track Workout</button></Link>
        <Link to='/dashboard/logs/log'><button>Log Workout</button></Link>
      </div>
  )
}

