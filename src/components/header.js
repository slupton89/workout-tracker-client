import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Link} from 'react-router-dom';
require('./header.css');

export function UserHeader(props) {
  if(!props.loggedIn) {
    return <Redirect to='/landing' />
  }
  return (
    <div className='user-dashboard'>
      <div className='user-info'>
        <h1 className='username'>{props.user.username}</h1>
        <p className='userHeight'>Height: {props.user.height}</p>
        <p className='userWeight'>Weight: {props.user.weight}</p>
        <p className='userAge'>Age: {props.user.age}</p>
      </div>

      <div className='workout-info'>
      <Link to='/dashboard/'><button>Dashboard</button></Link>
        <Link to='/landing'><button onClick={() => localStorage.removeItem('authToken')} className='logoutBtn'>Logout</button></Link>
      </div>

      {/* <div className='user-controls'>
      <button>Edit User</button>
      <Link to='/landing'><button onClick={() => localStorage.removeItem('authToken')}>Logout</button></Link>
      </div> */}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.user !== null,
    user: state.auth.user,
    logs: state.logs.logs
  }
}

export default requiresLogin()(connect(mapStateToProps)(UserHeader));