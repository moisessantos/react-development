import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ProductRow = ({ product }) => {
    const { name, stocked, price } = product;

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
  };

ProductRow.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

ProductRow.displayName = 'ProductRow';

export default memo(ProductRow);
