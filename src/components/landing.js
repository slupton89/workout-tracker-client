import React from 'react';

export default function landing(props) {
  return (
    <div className="landingContent">
      <h1>Workout Tracker</h1>
      <p>Welcome the <i>best</i> workout fitness tracking app
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus sit amet risus pretium, luctus enim quis, dignissim neque.
      Nam consequat scelerisque blandit.</p>

      {/* onclick hide landingContent show RegistrationForm */}
      {/* this.mainLanding.style.display = '' */}
      <button onClick={e => props.hideOnClick(e.target)}>Register</button>
      <button>Log In</button>
    </div>
  )
}

