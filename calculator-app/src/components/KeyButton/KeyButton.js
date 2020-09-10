import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useClickContext } from '../../ClickContext';


const KeyButton = ({ text, ...otherProps }) => {
  const handleClick = useClickContext();
  return (<Button variant="secondary" name={text} onClick={e => handleClick(e.target.name)} {...otherProps} className={ isNaN(Number(text)) && 'operator' }>{text}</Button>);
}

KeyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(KeyButton);
