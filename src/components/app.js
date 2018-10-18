import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import RegistrationForm from './form-registration'
import Landing from './landing';
import LoginForm from './form-login';
import UserHeader from './user-dash-header';
import Footer from './footer';
import WorkoutForm from './form-workout';
import TrackWorkout from './form-workout-track';
import LogWorkout from './form-workout-log';
 export default class App extends Component {

  componentDidMount() {
    if(localStorage.getItem('authToken') === null) {
      console.log('null')
        return <Redirect to='/landing' />
      } else {
        console.log('notnull')
        return <Redirect to='/dashboard' />
      }
  }

  render() {

    return (
      <Router>

        <div className='body'>

          <div className='header'>
          <button onClick={() => console.log(localStorage.getItem('authToken'))}>Test Button</button>
          <Route path='/dashboard' component={UserHeader} />
          </div>
          <br></br>
          <div className='main'>
            <Route exact path='/' component={this.componentDidMount} />
            <Route path='/landing' component={Landing} />
            <Route exact path='/landing/register' component={RegistrationForm} />
            <Route exact path='/landing/login' component={LoginForm} />
            <Route path='/logs' component={WorkoutForm} />
            <Route exact path='/logs/track' component={TrackWorkout} />
            <Route exact path='/logs/log' component={LogWorkout} />
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
