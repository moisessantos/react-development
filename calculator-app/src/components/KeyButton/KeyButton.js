import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const KeyButton = ({ handleClick, text, ...otherProps }) => <Button variant="secondary" name={text} onClick={e => handleClick(e.target.name)} {...otherProps} className={ isNaN(Number(text)) && 'operator' }>{text}</Button>;

KeyButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(KeyButton);
