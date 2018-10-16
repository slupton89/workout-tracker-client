import React, {Component} from 'react';
//import {connect} from 'react-redux'
import RegistrationForm from './registration-form'
import Landing from './landing';
import LoginForm from './login-form';

 export default class Main extends Component {

  hideOnClick(target) {
    return target.style.display = 'none';
  }

  render() {
    return (
      <div className="mainContent">
        <Landing onClick={e => this.hideOnClick(e)}/>
        <br></br>
        <RegistrationForm />
        <br></br>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//
// })

// export default connect()();