import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
export default class App extends Component {

  componentDidMount() {
    if(localStorage.getItem('authToken')) {this.props.dispatch(getWorkouts())}
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
          <Route path='/' component={() => <Redirect to='/landing' />} />
            <Route path='/landing' component={Landing} />
            <Route exact path='/landing/register' component={RegistrationForm} />
            <Route exact path='/landing/login' component={LoginForm} />

            <Route exact path='/dashboard' component={LogSimple} />

            <Route exact path='/dashboard/log/:id' component={LogDetail} />
            <Route path='/dashboard/logs' component={WorkoutControls} />
            <Route exact path='/dashboard/logs/track' component={TrackWorkout} />
            <Route exact path='/dashboard/logs/log' component={LogWorkout} />
          </div>

          <br></br>
          <div className='footer'>
            <Route path='/dashboard' component={Footer} />
          </div>
        </div>
      </Router>
    )
  }
}

App = connect()(App);
