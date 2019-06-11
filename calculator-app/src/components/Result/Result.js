import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'

const Result = ({ children, ...otherProps }) => (
  <InputGroup size="lg" {...otherProps}>
    {children || 0}
  </InputGroup>
);

Result.defaultProps = {
  children: '',
};

Result.propTypes = {
  children: PropTypes.string,
};

export default Result;
