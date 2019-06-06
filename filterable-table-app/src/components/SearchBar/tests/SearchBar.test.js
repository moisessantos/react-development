import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../';

describe('SearchBar component', () => {
  const handleClick = jest.fn(), handleFilter= jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const shallowComponent = () => shallow(<SearchBar handleClick = { handleClick } handleFilter = { handleFilter } />);

  it('should render snapshot', () => {
    const wrapper = shallowComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('should trigger handleFilter when input changes', () => {
    const expectedValue = 'ball';
    const wrapper = shallowComponent();
    
    wrapper.find('input[type="text"]').simulate('change', { target: { value: expectedValue } });

    expect(handleFilter).toHaveBeenCalledTimes(1);
    expect(handleFilter).toHaveBeenCalledWith(expectedValue);
  });
  it('should trigger onChange when input is checked', () => {
    const wrapper = shallowComponent();
    
    wrapper.find('input[type="checkbox"]').simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
