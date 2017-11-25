import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Tata } from './toto';

const wrapper = shallow(<Tata title="thetitle" />);

describe('<Tata />', () => {
  it('should render one div', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });

  it('should contains the title passed as props', () => {
    expect(wrapper.find('h1').html()).to.equal('<h1>thetitle</h1>');
  });
});