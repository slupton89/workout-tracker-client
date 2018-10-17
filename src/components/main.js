import React, {Component} from 'react';
//import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegistrationForm from './registration-form'
import Landing from './landing';
import LoginForm from './login-form';
import UserHeader from './user-dash-header';

 export default class Main extends Component {

  hideOnClick(target) {
    return target.style.display = 'none';
  }

  checkAuth = () => {
    console.log(localStorage.getItem('authToken'));
  }

  render() {
      if(localStorage === null) {
        window.history.pushState('landing', 'landing', '/landing');
      } else {
        window.history.pushState('dash', 'dashboard', '/dashboard');
      }
    return (
      <Router>
        <div className="main">

          <div className='header'>
            <Route path='/dashboard' component={UserHeader} />
          </div>
          <Route path='/landing' component={Landing} />
          <div>
            <Route exact path='/landing/register' component={RegistrationForm} />
            <Route  path='/landing/login' component={LoginForm} />
          </div>
          <br></br>

        </div>
      </Router>

    )
  }
}

// const mapStateToProps = state => ({
//
// })

// export default connect()();