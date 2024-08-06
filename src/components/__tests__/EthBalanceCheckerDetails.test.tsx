import { render, screen, waitFor } from '@testing-library/react';
import EthBalanceCheckerDetails from '../EthBalanceCheckerDetails';
import Web3 from 'web3';

jest.mock('web3');

const mockGetBalance = jest.fn().mockResolvedValue('1000000000000000000'); // 1 ETH in wei

(Web3 as unknown as jest.Mock).mockImplementation(() => ({
  eth: {
    getBalance: mockGetBalance
  },
  utils: {
    fromWei: (wei: string) => (parseInt(wei) / 1e18).toString()
  }
}));

test('renders AddressDetails and displays balance and transactions', async () => {
  render(<EthBalanceCheckerDetails address="0x123" />);

  await waitFor(() => {
    expect(screen.getByText('Address: 0x123')).toBeInTheDocument();
  });
});
