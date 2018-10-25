import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
    <Link to='/dashboard/logs' id='newWorkoutLink'><button className='newWorkoutBtn' aria-label={'new workout button'}>+New Workout</button></Link>
    </div>
  )
}