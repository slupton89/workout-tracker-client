import React from 'react';
import LogSimple from '../components/log-simple';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

describe('<LogSimple />', () => {
  it('Should render without crashing', () => {
    shallow(
    <Provider store={store}>
      <LogSimple />
    </Provider>);
  });

  it('Should render with correct data', () => {
    const logs = [
    <a href="/dashboard/log/5bcdfe31a00dd506b9140a33"><li class="log-item"><h1>Strength</h1><h2>10</h2><h2>2018-10-22T16:43:29.349Z</h2></li></a>,
  ];


    const wrapper = shallow(
    <Provider store={store}>
      <LogSimple {...logs} />
    </Provider>);

    const log = wrapper.find('log-item')
    console.log(log.debug());
  })

})