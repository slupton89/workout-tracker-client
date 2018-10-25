import React from 'react';
import {Link} from 'react-router-dom';
require('./landing.css');

export default function Landing() {
  return (
    <div className="landing-content" aria-label={'landing intro'}>
      <div>
      <h1>Workout Tracker</h1>
      <p>Welcome the my workout fitness tracking app.
      This app will log and keep track of your workouts.
      Register or login to get started.</p>

      <Link to='/landing/register'><button className='registerBtn' aria-label={'register button'}>Register</button></Link>
      <Link to='/landing/login'><button className='loginBtn' aria-label={'login button'}>Log In</button></Link>
      </div>
    </div>
  )
}

