import React from 'react';
import { shallow } from 'enzyme';
import Item from '../';

describe('Item component', () => {
  it('should render snapshot', () => {
  const wrapper = shallow(<Item handleClick = { jest.fn() }>Do homework</Item>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onDelete with expected value', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Item handleClick={ mock }>Do homework    </Item>);
    
    wrapper.find('button').simulate('click', { target: { previousSibling: { innerHTML: "Do homework" }}});

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith("Do homework");
  });
});
