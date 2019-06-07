import React from 'react';
import { shallow } from 'enzyme';
import KeyButton from '../';

describe('KeyButton tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<KeyButton text='5' handleClick={ jest.fn() } />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleClick on button click', () => {
        const mock = jest.fn();
        const event = { target: { name: '5' } };
        const wrapper = shallow(<KeyButton text='5' handleClick={ mock } />);
        wrapper.find('button').simulate('click', event);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(event.target.name);
    });
})