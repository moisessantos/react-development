import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import { KeyButton } from '..';

const KeyRow = ({ values, handleClick }) => (
  <Fragment>
    {values.map(value => <KeyButton key={value} text={value} handleClick={handleClick} />)}
    <br />
  </Fragment>
);

KeyRow.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default memo(KeyRow);
