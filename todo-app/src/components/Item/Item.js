import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Item = ({ children, handleClick }) => (
        <li>
            <span>{ children }</span>
            <button 
              onClick={(e) => handleClick(e.target.previousSibling.innerHTML.trimEnd())}
            >Delete</button>
        </li>
    );

Item.propTypes = {
  handleClick: PropTypes.func.isRequired
};

Item.displayName = 'Item';

export default memo(Item);
