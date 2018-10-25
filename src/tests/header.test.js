import React from 'react';
import {UserHeader} from '../components/header';
import {shallow, mount} from 'enzyme';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import store from '../store';
import {Provider} from 'react-redux';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    shallow(
    <Provider store={store}>
      <UserHeader loggedIn={{loggedin: true}}/>
    </Provider>);
  });

  it('Should link to another page', () => {
    const props = {
      loggedIn: true,
      user: {
        username: 'TestUser',
        height: '123',
        weight: '123',
        age: '123'
      }
    }
    const history = createMemoryHistory();
    const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <UserHeader {...props}/>
      </Router>
    </Provider>
    );

    const dashBtn = wrapper.find('.dashBtn');
    const logBtn = wrapper.find('.logoutBtn');
    const dashLink = wrapper.find('#dashLink').first();
    const logLink = wrapper.find('#logoutLink').first();

    expect(dashBtn.exists()).toEqual(true);
    expect(logBtn.exists()).toEqual(true);
    expect(dashLink.prop('to')).toEqual('/dashboard');
    expect(logLink.prop('to')).toEqual('/landing');
  })

})