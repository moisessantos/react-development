import React, { memo } from 'react';
import PropTypes from 'prop-types';

const KeyButton = ({ handleClick, text, ...otherProps }) => <button type="button" name={text} onClick={e => handleClick(e.target.name)} {...otherProps}>{text}</button>;

KeyButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(KeyButton);
