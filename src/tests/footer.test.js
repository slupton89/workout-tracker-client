import React from 'react';
import Footer from '../components/footer';
import {shallow} from 'enzyme';

describe('<Footer />', () => {
  it('Should render without crashing', () => {
    shallow(<Footer />);
  });


  // it('Should link to another page', () => {
  //   const wrapper = shallow(<Footer />);
  //   const btn = wrapper.find('.newWorkoutBtn');
  //   btn.simulate('click');
  //   expect(btn)
  // })

})