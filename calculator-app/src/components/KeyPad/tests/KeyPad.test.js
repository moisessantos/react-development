import React from 'react';
import { shallow } from 'enzyme';
import KeyPad from '../';

describe('KeyPad tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<KeyPad handleClick={ jest.fn() } />)
        expect(wrapper).toMatchSnapshot();
    });
})