import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestButton from './TestButton';

describe('TestButton', () => {
  it('renders a basic button', () => {
    render(<TestButton />);

    const basicBtn = screen.getByRole('button', {
      name: /hello world/i,
    });

    expect(basicBtn).toBeInTheDocument();
  }),
    it('renders a custom button', () => {
      render(<TestButton label='Custom' />);

      const customBtn = screen.getByRole('button', {
        name: /custom/i,
      });

      expect(customBtn).toBeInTheDocument();
    });
});
