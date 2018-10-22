import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {login} from './actions/auth';
import Input from './input';
import {connect} from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import requiresLogin from './requires-login';
require('./form-login.css');

function LoginForm(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <form className='login-form' onSubmit={props.handleSubmit(values =>
      props.dispatch(login(values))
    )}>
      <Field name='username' id='username' component={Input} element='input' type='text'
        label='Username' />
      <Field name='password' id='password' component={Input} element='input' type='password'
        label='Password' />

      <button>Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.user !== null
  }
}

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
  form: 'login'
})(LoginForm);