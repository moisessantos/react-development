import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { KeyRow } from '.';

const KeyPad = ({ handleClick, ...otherProps }) => (
  <div className="button" {...otherProps}>
    <KeyRow buttons={['(', 'CE', ')', 'C']} handleClick={handleClick} />
    <KeyRow buttons={['1', '2', '3', '+']} handleClick={handleClick} />
    <KeyRow buttons={['4', '5', '6', '-']} handleClick={handleClick} />
    <KeyRow buttons={['7', '8', '9', '*']} handleClick={handleClick} />
    <KeyRow buttons={['.', '0', '=', '/']} handleClick={handleClick} />
  </div>
);

KeyPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default memo(KeyPad);
