import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { KeyButton } from '..';

const KeyRow = ({ values }) => (
  <ButtonGroup size="lg">
    {values.map(value => <KeyButton key={value} text={value} />)}
    <br />
  </ButtonGroup>
);

KeyRow.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default memo(KeyRow);
