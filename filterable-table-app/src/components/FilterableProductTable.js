import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductTable, SearchBar}  from './';

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredProducts: props.products,
      includeOutOfStock: true
    };

    this.filterProduct = this.filterProduct.bind(this);
    this.filterStock = this.filterStock.bind(this);
  }
  render() {
    let products = this.state.filteredProducts;

    if(!this.state.includeOutOfStock) {
      products = products.filter(product => product.stocked);
    }

    return (
      <div className='wrapper'>
        <SearchBar filter={ this.filterProduct } onClick={ this.filterStock } />
        <ProductTable products={ products } />
      </div>
    );
  }

  filterProduct(name) {
    this.setState({
      filteredProducts: this.state.filteredProducts.filter(product => product.name.indexOf(name) !== -1)
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
