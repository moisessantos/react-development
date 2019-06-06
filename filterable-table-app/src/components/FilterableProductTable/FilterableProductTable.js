import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProductTable, SearchBar }  from '..';

class FilterableProductTable extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      filteredProducts: props.products,
      includeOutOfStock: true
    };
  }
  render() {
    let { filteredProducts, includeOutOfStock } = this.state;

    if(!includeOutOfStock) {
      filteredProducts = filteredProducts.filter(product => product.stocked);
    }

    return (
      <div className='wrapper'>
        <SearchBar handleFilter={ this.filterProduct.bind(this) } handleClick={ this.filterStock.bind(this) } />
        <ProductTable products={ filteredProducts } />
      </div>
    );
  }

  filterProduct(name) {
    this.setState({
      filteredProducts: this.props.products.filter(product => product.name.indexOf(name) !== -1)
    });
  }

  filterStock(){
    this.setState({
      includeOutOfStock: !this.state.includeOutOfStock
    });
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default FilterableProductTable;
