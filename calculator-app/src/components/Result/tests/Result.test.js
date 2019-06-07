import React from 'react';
import { shallow } from 'enzyme';
import Result from '..';

describe('Result tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<Result>500</Result>)
        expect(wrapper).toMatchSnapshot();
    });
})