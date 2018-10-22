import React from 'react';
import {Link} from 'react-router-dom';
require('./landing.css');

export default function landing() {
  return (
    <div className="landingContent">
      <h1>Workout Tracker</h1>
      <p>Welcome the <i>best</i> workout fitness tracking app
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus sit amet risus pretium, luctus enim quis, dignissim neque.
      Nam consequat scelerisque blandit.</p>

      <Link to='/landing/register'><button class='registerBtn'>Register</button></Link>
      <Link to='/landing/login'><button>Log In</button></Link>

    </div>
  )
}

