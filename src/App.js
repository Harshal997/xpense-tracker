import { createContext, useState, useEffect } from 'react'
import { FinanceFlow } from "./components/finance-flow/FinanceFlow";
import './App.css'
import { Transactions } from "./components/transactions/Transactions";

export const WalletContext = createContext();

function App() {
  const [wallet, setWallet] = useState(() => {
    const initialWallet = localStorage.getItem("wallet");
    return initialWallet ? parseInt(initialWallet, 10) : 5000;
  });

  const [transactions, setTransactions] = useState(() => {
    const transactions = localStorage.getItem("transactions");
    return transactions ? JSON.parse(transactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("wallet", wallet);
  }, [wallet]);

  useEffect(() => {
    transactions && transactions.length && localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addBalance = (amount) => {
    setWallet((prev) => prev + parseInt(amount));
  };

  const subtractBalance = (amount) => {
    setWallet((prev) => prev - parseInt(amount));
  };

  const addTransaction = (transaction) => {
    console.log("tra", transaction)
    setTransactions((prev) => [...prev, transaction]);
  }

  const deleteTransaction = (transactionId) => {
    console.log("id",transactionId)
    setTransactions((prev) => prev.filter((tra) => tra.id !== transactionId));
  }  

  return (
    <WalletContext.Provider value={{ wallet, addBalance, subtractBalance, transactions, addTransaction, deleteTransaction }}>
      <FinanceFlow />
      <Transactions />
      {/* <ExpenseCharts /> */}
    </WalletContext.Provider>
  );
}

export default App;
