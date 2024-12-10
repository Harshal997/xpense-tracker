import React from "react";
import { Transaction } from "../../shared/finance/transaction/Transaction";
import styles from "./transactions.module.css";

export const Transactions = () => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <div className={styles.transactionsContainer}>
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </div>
  );
};
