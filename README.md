# Etherium Balance Checker Application

An application that allows a user to enter an Ethereum (ETH) address, fetches the balance of the using Web3, and lists the transactions associated with the address that is built using react/typescript with following features:

* User can input field to enter an Ethereum (ETH) address.
* Fetch the balance of the address using Web3.js.
* List transactions associated with the address with simple pagination
* Styled using Tailwind CSS
* Add jest for unit tests for main functionalities

Here is the step-by-step process:

1. Initialized Project and install dependencies: Clone react application repository with typescript, tailwind css and web3.js
    * npm install first to install dependencies then
    * npm install web3 tailwindcss @types/web3
    * npx tailwindcss init

2. Configured Tailwind CSS: Add the following lines to your tailwind.config.js file:
    /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
3. Added the Tailwind directives to src/index.css file:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

4. Created the components under `src/components/EthBalanceCheckerInput` to fetch etherium requests to infura `src/components/EthBalanceCheckerDetails` to display the fetched etherium lists with simple pagination.

5. Added and installed testing libraries ( I choose jest as one of my test library ): 
    * npm install --save-dev @testing-library/react @testing-library/jest-dom jest

6. Run application
    * npm run start or npm start to start `localhost:3000`
    * npm run test or npm test to run tests


#Description of Approach

Approach Taken:

* Created a functional React component with hooks for managing state and handling side effects.
* Used Web3.js to interact with the Ethereum blockchain.
* Registered to infura.io to generate eth addresses requests
* Added styling for a user-friendly interface.

Challenges Faced:

* Handling Ethereum addresses and ensuring valid input.
* Fetching transaction data (which was simplified in this example for demonstration purposes).

Solutions:

* Added input validation for Ethereum addresses.
* Used mock data for transactions; in a real-world scenario, would integrate with an API like Etherscan for transaction history.

Note: 
* Provided screenshots for outputs

