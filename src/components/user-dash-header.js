import React from 'react';
import {Link} from 'react-router-dom';

export default function UserHeader(props) {
  return (
    <div className='user-dashboard'>
      <div className='user-info'>
        <h1 className='username'>User Name</h1>
        <p className='userHeight'>6'0"</p>
        <p className='userWeight'>200lbs</p>
        <p className='userAge'>50 years old</p>
      </div>

      <div className='workout-info'>
      <h2># Workouts this week</h2>
      <p className='workoutNum'>5</p>
      <h2>workout time this week</h2>
      <p className='workoutTime'>5</p>
      <h2>Last workout type</h2>
      <p className='workoutType'>Strength</p>
      <h2>Last workout date</h2>
      <p className='workoutDate'>10/10/2019</p>
      </div>

      <div className='user-controls'>
      <button>Edit User</button>
      <Link to='/landing'><button onClick={() => localStorage.removeItem('authToken')}>Logout</button></Link>
      </div>

    </div>
  )
}