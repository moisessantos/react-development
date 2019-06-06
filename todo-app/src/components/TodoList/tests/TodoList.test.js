import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../';

describe('TodoList component', () => {
  it('should render snapshot', () => {
  const wrapper = shallow(<TodoList items = { ['Get up', 'Do homework'] } />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call addTodo and add item when is not in the list', () => {
    const todo = 'New todo'; 
    const mock = jest.fn();
    const wrapper = shallow(<TodoList items = { ['Get up', 'Do homework'] } />);

    wrapper.find('input').text(todo);
    wrapper.find('button').simulate('click',{ target: { previousSibling: 
      { 
        get innerHTML(){ return todo}, 
        set innerHTML(value) { mock(value)}}
      }
    });
    expect(wrapper.state('currentItems')[2]).toBe(todo);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith('');
  });

  it('should call addTodo and not add item when is in the list', () => {
    const todo = 'Get up'; 
    const mock = jest.fn();
    const wrapper = shallow(<TodoList items = { ['Get up', 'Do homework'] } />);

    wrapper.find('input').text(todo);
    wrapper.find('button').simulate('click',{ target: { previousSibling: 
      { 
        get innerHTML(){ return todo}, 
        set innerHTML(value) { mock(value)}}
      }
    });
    expect(wrapper.state('currentItems').length).toBe(2);
    expect(mock).toBeCalledTimes(0);
  });
});
