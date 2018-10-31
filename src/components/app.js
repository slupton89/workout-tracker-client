import React, {Component} from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from './form-registration'
import Landing from './landing';
import LoginForm from './form-login';
import UserHeader from './header';
import Footer from './footer';
import WorkoutControls from './workout-controls';
import TrackWorkout from './form-workout-track';
import LogWorkout from './form-workout-log';
import LogSimple from './log-simple';
import LogDetail from './log-detail';
import {getWorkouts} from './actions/logs';
import {connect} from 'react-redux';

require('./app.css');
export default class App extends Component {
  componentDidUpdate(prevProps) {
    this.props.dispatch(getWorkouts());
  }

  render() {
    return (
      <Router>
        <div className='body'>

          <div className='header'>
          <Route path='/dashboard' component={UserHeader} />
          </div>
          <br></br>

          <div className='main'>
            <Route path='/' component={Landing} />
            <Route exact path='/register' component={RegistrationForm} />
            <Route exact path='/login' component={LoginForm} />

            <Route exact path='/dashboard' component={LogSimple} />

            <Route exact path='/dashboard/log/:id' component={LogDetail} />
            <Route path='/dashboard/logs' component={WorkoutControls} />
            <Route exact path='/dashboard/logs/track' component={TrackWorkout} />
            <Route exact path='/dashboard/logs/log' component={LogWorkout} />
          </div>

          <br></br>
          <div className='footer'>
            <Route exact path='/dashboard' component={Footer} />
          </div>
        </div>

      </Router>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  authToken: state.auth.authToken
})

App = connect(mapStateToProps)(App);
