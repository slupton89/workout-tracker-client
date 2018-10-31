import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {login} from './actions/auth';
import Input from './input';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

require('./form-login.css');

export function LoginForm(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <form className='login-form' onSubmit={props.handleSubmit(values => {
      props.dispatch(login(values));
    }
    )} aria-label={'login form'}>
      <Field name='username' id='username' component={Input} element='input' type='text'
        label='Username' aria-label={'username field'} />
      <Field name='password' id='password' component={Input} element='input' type='password'
        label='Password' aria-label={'password field'}/>

      <button className='loginBtn' aria-label={'login submit'}>Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null
})

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps)(LoginForm));