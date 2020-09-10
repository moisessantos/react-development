import React from 'react';
import { shallow } from 'enzyme';
import KeyButton from '../';
import * as ClickContext from '../../../ClickContext';

jest.mock('../../../ClickContext');

describe('KeyButton tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<KeyButton text='5' />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleClick on button click', () => {
        const mock = jest.fn();
        const event = { target: { name: '5' } };
        ClickContext.useClickContext = () => mock;
        const wrapper = shallow(<KeyButton text='5' />);
        wrapper.find('Button').simulate('click', event);
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(event.target.name);
    });
})