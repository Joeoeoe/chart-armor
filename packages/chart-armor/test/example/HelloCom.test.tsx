import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloCom from './HelloCom';

describe('HelloCom test', () => {
  test('render component', () => {
    render(<HelloCom />);
    expect(screen.getByText('Hello React')).toBeInTheDocument();
  });
});
