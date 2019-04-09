import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductTable, SearchBar}  from './';

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
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
