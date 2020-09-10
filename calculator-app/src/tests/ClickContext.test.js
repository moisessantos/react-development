import React from 'react';

import { useClickContext, ClickContext } from '../ClickContext';

jest.mock('react');

describe('<useClickContext /> spec', () => {
  it('returns context as expected', () => {
    React.useContext = jest.fn(() => 'ClickContext');
    expect(useClickContext()).toBe('ClickContext');
    expect(React.useContext).toBeCalledWith(ClickContext);
  });

  it('throws error when context is undefined', () => {
    React.useContext = jest.fn(() => null);
    try {
      useClickContext();
    } catch (ex) {
      expect(ex).toMatchSnapshot();
    }
  });
});
