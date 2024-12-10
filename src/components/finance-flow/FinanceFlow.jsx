import React from "react";
import styles from './financeFlow.module.css'
import { Finance } from "../../shared/finance/Finance";

export const FinanceFlow = () => {
  return (
    <div className={styles.fundsContainer}>
      <Finance income={true} />
      <Finance />
    </div>
  );
};
