import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductRow, ProductCategoryRow } from '../';

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table className='table container'>
        <thead>
          <tr className='header'>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default ProductTable;
