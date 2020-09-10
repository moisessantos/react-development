import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App tests', () => {
    it('should render as expected', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it.each(
        [
            ["calculate", "="],
            ["reset","C"],
            ["backspace", "CE"]
        ],
        'onClick should call %s when %s is pressed'
        ,(func, val) => {
            const wrapper = shallow(<App />);
            const spy = jest.spy(wrapper.instance(), func);

            wrapper.instance().onClick(val);

            expect(spy).toBeCalledTimes(1);
        });
    
    it('onClick should append to state when a number or operator is pressed', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ result: "1" })
        wrapper.instance().onClick("+");

        expect(wrapper.state().result).toBe("1+");
    });

    it('reset should reset the result', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ result: "1" })
        wrapper.instance().reset();

        expect(wrapper.state().result).toBe("");
    });

    
    it('backspace should remove the last char from the result', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ result: "1+" })
        wrapper.instance().backspace();

        expect(wrapper.state().result).toBe("1");
    });

    it('calculate should do the calculation in the result', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ result: "1+2" })
        wrapper.instance().calculate();

        expect(wrapper.state().result).toBe("3");
    });

    it('calculate should do the calculation when -- is present in the result', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ result: "1--2" })
        wrapper.instance().calculate();

        expect(wrapper.state().result).toBe("3");
    });

    it('calculate should return error in case of typos 2', () => {
        const wrapper = shallow(<App />);
        wrapper.find('ContextProvider').props().value(1);
        wrapper.find('ContextProvider').props().value("+");
        wrapper.find('ContextProvider').props().value("*");
        wrapper.find('ContextProvider').props().value(2);
        wrapper.find('ContextProvider').props().value("=");
        expect(wrapper.find('Result').props().children).toBe("error");
    });

    it('resets or backspaces result', () => {
        const wrapper = shallow(<App />);
        wrapper.find('ContextProvider').props().value(1);
        wrapper.find('ContextProvider').props().value("C");
        expect(wrapper.find('Result').props().children).toBe("");
        wrapper.find('ContextProvider').props().value(2);
        wrapper.find('ContextProvider').props().value("*");
        wrapper.find('ContextProvider').props().value("CE");
        expect(wrapper.find('Result').props().children).toBe("2");
    });
})