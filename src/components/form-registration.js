import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, correctLength, charIsNum, isEmail} from './validators';
import {register} from './actions/register';
import {login} from './actions/auth';
import Input from './input';
import Redirect from 'react-router-dom/Redirect';
import { connect } from 'react-redux';
require('./form-registration.css');

export function RegistrationForm(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <form className='registration-form' onSubmit={props.handleSubmit(values => {
      return Promise.all([
        props.dispatch(register(values)),
      ])
      .then(() => props.dispatch(login({username: values.username, password: values.password}))
      )
    })}aria-label={'registration form'}>
      <Field name='username' id='username' component={Input} element='input' type='text'
        label='Username' validate={[required, nonEmpty, correctLength]} aria-label={'username field'}/>
      <Field name='password' id='password' component={Input} element='input' type='password'
        label='Password' validate={[required, nonEmpty, correctLength]} aria-label={'password field'}/>
      <Field name='fullName' id='fullName' component={Input} element='input' type='string'
        label='Full Name' validate={[required, nonEmpty]} aria-label={'fullname field'}/>
      <Field name='email' id='email' component={Input} element='input' type='email'
        label='Email' validate={[required, nonEmpty, isEmail]} aria-label={'email field'}/>
      <Field name='age' id='age' component={Input} element='input' type='Number'
        label='Age' validate={[charIsNum]} aria-label={'age field'}/>
      <Field name='height' id='height' component={Input} element='input' type='string'
        label='Height' validate={[charIsNum]} aria-label={'height field'}/>
      <Field name='weight' id='weight' component={Input} element='input' type='Number'
        label='Weight' validate={[charIsNum]} aria-label={'weight field'}/>

      <button className='loginBtn'aria-label={'submit button'}>Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.user !== null
})

RegistrationForm = connect(mapStateToProps)(RegistrationForm);

export default reduxForm({
  form: 'register',
})(RegistrationForm);

