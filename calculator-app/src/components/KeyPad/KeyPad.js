import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { KeyRow } from '../';

const KeyPad = ({ handleClick, ...otherProps }) => (
  <div className="button" {...otherProps}>
    <KeyRow values={['(', 'CE', ')', 'C']} handleClick={handleClick} />
    <KeyRow values={['1', '2', '3', '+']} handleClick={handleClick} />
    <KeyRow values={['4', '5', '6', '-']} handleClick={handleClick} />
    <KeyRow values={['7', '8', '9', '*']} handleClick={handleClick} />
    <KeyRow values={['.', '0', '=', '/']} handleClick={handleClick} />
  </div>
);

KeyPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default memo(KeyPad);
