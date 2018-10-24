import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
    <Link to='/dashboard/logs'><button className='newWorkoutBtn'>+New Workout</button></Link>
    </div>
  )
}