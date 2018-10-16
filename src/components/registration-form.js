import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, correctLength, charIsNum, isEmail} from './validators';
import {register} from './actions/register';
import {login} from './actions/login';
import Input from './input';

class RegistrationForm extends React.Component {
  render() {
    if(this.props.submitSucceeded) {
      return (
        <p>Submitted and Logged in</p>
      )
    }
    return (
      <form onSubmit={this.props.handleSubmit(values => {
        return Promise.all([
          this.props.dispatch(register(values)),
        ])
        .then(() => this.props.dispatch(login({username: values.username, password: values.password}))
        )
        .then(() => console.log('Created user and logged in'));
      }

      )}>
        <Field name='username' id='username' component={Input} element='input' type='text'
          label='Username' validate={[required, nonEmpty, correctLength]} />
        <Field name='password' id='password' component={Input} element='input' type='password'
          label='Password' validate={[required, nonEmpty, correctLength]} />
        <Field name='fullName' id='fullName' component={Input} element='input' type='string'
          label='Full Name' validate={[required, nonEmpty]} />
        <Field name='email' id='email' component={Input} element='input' type='email'
          label='Email' validate={[required, nonEmpty, isEmail]} />
        <Field name='age' id='age' component={Input} element='input' type='Number'
          label='Age' validate={[charIsNum]} />
        {/* change to dropdown selectors for height and convert to metric because 🇺🇸 */}
        <Field name='height' id='height' component={Input} element='input' type='Number'
          label='Height' validate={[charIsNum]} />
        <Field name='weight' id='weight' component={Input} element='input' type='Number'
          label='Weight' validate={[charIsNum]} />

        <button>Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'register',
})(RegistrationForm);