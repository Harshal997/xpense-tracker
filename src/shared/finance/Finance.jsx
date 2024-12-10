import React from 'react'
import styles from './finance.module.css'

export const Finance = () => {
  return (
    <div className={styles.fundContainer}>
      <p className={styles.fundText}>Wallet Balance: <span>₹4500</span></p>
      <button className={styles.fundButtonIncome}>+ Add Income</button>
    </div>
  )
}
