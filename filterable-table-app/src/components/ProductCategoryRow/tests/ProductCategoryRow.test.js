import React from 'react';
import { shallow } from 'enzyme';
import ProductCategoryRow from '..';

describe('ProductCategoryRow component', () => {
  it('should render snapshot', () => {
    const wrapper = shallow(<ProductCategoryRow category = "sports" />);
    expect(wrapper).toMatchSnapshot();
  });
});
