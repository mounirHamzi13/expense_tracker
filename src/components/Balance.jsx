import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Extract amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Log the amounts array to see if there are any unexpected values
  console.log('Amounts:', amounts);

  // Filter out non-numeric values (safety check) and sum them up
  const total = amounts
    .filter(item => !isNaN(item)) // Remove non-numeric values
    .reduce((acc, item) => acc + item, 0) // Sum up the amounts
    .toFixed(2); // Format the total to 2 decimal places

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
