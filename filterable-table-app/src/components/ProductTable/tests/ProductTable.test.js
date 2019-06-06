import React from 'react';
import { shallow } from 'enzyme';
import ProductTable from '..';

describe('ProductTable component', () => {
  it('should render snapshot', () => {
    const wrapper = shallow(<ProductTable products={[
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'}
    ] } />);
    expect(wrapper).toMatchSnapshot();
  });
});
