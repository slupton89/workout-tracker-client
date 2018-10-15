import React, {Component} from 'react';
import {connect} from 'react-redux'
import RegistrationForm from './registration-form'

 export default class Main extends Component {

  mainLanding = (
    <div className="mainContent">
      <div className="landingContent">
        <h1>Workout Tracker</h1>
        <p>Welcome the <i>best</i> workout fitness tracking app
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sit amet risus pretium, luctus enim quis, dignissim neque.
        Nam consequat scelerisque blandit.</p>
        <button>Register</button>
        <button>Log In</button>
      </div>
    </div>
  )



  render() {

    return (
      <RegistrationForm />
    )
  }
}

// const mapStateToProps = state => ({
//   cheeses: state.cheese
// })

// export default connect()();