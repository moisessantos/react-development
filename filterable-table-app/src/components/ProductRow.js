import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductRow extends Component {
  render() {
    const {name, stocked, price} = this.props.product;

    return (
      <tr>
        <td>
        {
          stocked ? 
            name :
            <span style={{color: 'red'}}>{name}</span>
        }
        </td>
        <td>{price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductRow;
