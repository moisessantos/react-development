import React from 'react';
import { shallow } from 'enzyme';
import ProductRow from '../';

describe('ProductRow component', () => {
  const product = {
    price: '100 €',
    name: 'Ball',
    stocked: true
  }

  it('should render snapshot', () => {
    const wrapper = shallow(<ProductRow product = {product} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should add style when isStocked is false', () => {
    const wrapper = shallow(<ProductRow product = {{ ...product, stocked: false } } />);
    
    const style = wrapper.find('span').get(0).props.style;
    expect(style.color).toBe('red');
  });
});
