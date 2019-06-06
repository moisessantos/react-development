import React from 'react';
import { shallow } from 'enzyme';
import FilterableProductTable from '..';

describe('FilterableProductTable component', () => {
  const mockProducts = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'}
  ];
  it('should render snapshot', () => {
    const wrapper = shallow(<FilterableProductTable products={ mockProducts } />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should filter by name', () => {
    const wrapper = shallow(<FilterableProductTable products={ mockProducts } />);
    wrapper.instance().filterProduct('iPod');

    expect(wrapper.state('filteredProducts')).toEqual([{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'}])
    expect(wrapper).toMatchSnapshot();
  });
  it('should filter by stock', () => {
    const wrapper = shallow(<FilterableProductTable products={ mockProducts } />);
    wrapper.instance().filterStock();
    
    expect(wrapper.state('includeOutOfStock')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
