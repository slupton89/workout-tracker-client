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
      <div className="image-container">
      <div className='landing-img'></div>
      </div>
      <div>
      <h1>Workout Tracker</h1>
      <p>
      This simple app will help you log and keep track of your workouts.
      Track and review your data over time so you can get the best results.
      Keep yourself motivated by setting a personal goal, such as losing 5 lbs or taking the dog out for
      an extra run each week.</p>
      <p>Register or login to get started.</p>

      <Link to='/register'><button className='registerBtn' aria-label={'register button'}>Register</button></Link>
      <Link to='/login'><button className='loginBtn' aria-label={'login button'}>Log In</button></Link>
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