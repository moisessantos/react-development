import React from 'react';
import { shallow } from 'enzyme';
import KeyRow from '..';

describe('KeyRow tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<KeyRow values={[1,2,3,4]} />)
        expect(wrapper).toMatchSnapshot();
    });
})