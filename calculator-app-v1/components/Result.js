import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ children, ...otherProps }) => (
  <div className="result" {...otherProps}>
    <p>{children}</p>
  </div>
);

Result.defaultProps = {
  children: '',
};

Result.propTypes = {
  children: PropTypes.string,
};

export default Result;
