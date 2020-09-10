import React, { memo } from 'react';

import { KeyRow } from '../';

const KeyPad = ({ ...otherProps }) => (
  <div className="button" {...otherProps}>
    <KeyRow values={['(', 'CE', ')', 'C']} />
    <KeyRow values={['1', '2', '3', '+']} />
    <KeyRow values={['4', '5', '6', '-']} />
    <KeyRow values={['7', '8', '9', '*']} />
    <KeyRow values={['.', '0', '=', '/']} />
  </div>
);

export default memo(KeyPad);
