import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { KeyButton } from '..';

const KeyRow = ({ values, handleClick }) => (
  <ButtonGroup size="lg">
    {values.map(value => <KeyButton key={value} text={value} handleClick={handleClick} />)}
    <br />
  </ButtonGroup>
);

KeyRow.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default memo(KeyRow);
