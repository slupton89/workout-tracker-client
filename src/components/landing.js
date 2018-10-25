import React from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
require('./landing.css');

export function Landing(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.user !== null,
  }
}

export default connect(mapStateToProps)(Landing);