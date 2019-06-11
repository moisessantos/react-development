import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Item = ({ children, handleClick }) => (
        <li className="list-group-item list-group-item-action">
            <span>{ children }</span>
            <button
              className="btn btn-danger" 
              onClick={(e) => handleClick(e.target.previousSibling.innerHTML)}
            >Delete</button>
        </li>
    );

Item.propTypes = {
  handleClick: PropTypes.func.isRequired
};

Item.displayName = 'Item';

export default memo(Item);
