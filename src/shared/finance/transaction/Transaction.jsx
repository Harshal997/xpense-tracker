import React from 'react'
import styles from './transaction.module.css'
import { CiPizza } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { VscEdit } from "react-icons/vsc";

export const Transaction = () => {
  return (
    <div style={{backgroundColor: '#ffffff', display: 'inline-flex', flexDirection: 'column'}}>
        <div className={styles.transaction}>
        <div className={styles.transactionInfoRow}>
            <div style={{padding: '0.3em 0.3em', backgroundColor: '#D9D9D9', borderRadius: 50}}>
            <CiPizza size={20} />
            </div>
            <div className={styles.transactionInfoName}>
                <p>Samosa</p>
                <p style={{color: "#9B9B9B"}}>March 20, 2024</p>
            </div>
        </div>
        <div className={styles.transactionInfoRow}>
            <p>₹150</p>
            <button className={styles.transactionInfoButton} style={{backgroundColor: ' #FF3838'}}><RxCrossCircled size={20}/></button>
            <button className={styles.transactionInfoButton}><VscEdit size={20}/></button>
        </div>
        </div>
        <div className={styles.line}></div>
    </div>
  )
}
