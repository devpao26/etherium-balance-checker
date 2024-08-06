import { render, screen, fireEvent } from '@testing-library/react';
import EthBalanceCheckerInput from '../EthBalanceCheckerInput';

test('renders EthBalanceCheckerInput and submits EthBalanceChecker', () => {
  const handleSubmit = jest.fn();
  render(<EthBalanceCheckerInput onSubmit={handleSubmit} />);

  const input = screen.getByPlaceholderText('Enter Ethereum address') as HTMLInputElement;
  const button = screen.getByText('Fetch Etherium');

  fireEvent.change(input, { target: { value: '0x123' } });
  fireEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledWith('0x123');
});
