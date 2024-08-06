import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

interface EthBalanceCheckerDetailsProps {
  address: string;
}

const EthBalanceCheckerDetails: React.FC<EthBalanceCheckerDetailsProps> = ({ address }) => {
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Create an account on infura the paste id here - this id is bind to my account
  const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/5acc38aa3488415fbf2eab4b93385160');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Catch error before intitiating eth address
        if (!web3.utils.isAddress(address)) {
         setError('Invalid Ethereum address');
         setLoading(true);
        }

        // Fetch balance data
        const balanceWei = await web3.eth.getBalance(address);
        setBalance(web3.utils.fromWei(balanceWei, 'ether'));

        // Fetch transactions ( mock implementation for example)
        const transactions = await fetchTransactions(address, currentPage);
        setTransactions(transactions);
        setTotalPages(5); // total pages
      } catch (err) {
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [address, currentPage, loading]);

  const fetchTransactions = async (address: string, page: number) => {
    // Mock transaction data
    return new Array(10).fill(null).map((_, index) => ({
      hash: `0x${index}`,
      value: Math.random() * 1000
    }));
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col m-8">
      {loading ? 'Loading...' :
       <div>
        {address !== null && (
            <div>
            <h2 className="text-sm font-semibold leading-6 text-gray-900">Address: {address}</h2>
            </div>
        )}
        {balance !== null && (
            <div>
            <h2 className="text-sm font-semibold leading-6 text-gray-900 mb-6">Balance: {balance} ETH</h2>
            </div>
        )}
        {error && <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Invalid Ethereum Address.</span>
            </div>
        </div>}
        {transactions.length > 0 && (
            <div>
            <h3 className="font-bold tracking-tight text-gray-900 sm:text-6xl mb-2">Transactions</h3>
            <ul className="list">
                {transactions.map((tx, index) => (
                <li key={index} className="list-[upper-number] border p-2 mb-2 rounded-md shadow-md">
                    <p className="text-gray-900">Hash: {tx.hash}</p>
                    <p className="text-gray-900">Value: {tx.value}</p>
                </li>
                ))}
            </ul>
            </div>
        )}
        <div className="flex justify-between">
            <button className="p-2 bg-blue-500 text-white rounded-md" onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Previous</button>
            <button className="p-2 bg-blue-500 text-white rounded-md" onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>Next</button>
        </div>
       </div>
       }
    </div>
  );
};

export default EthBalanceCheckerDetails;
