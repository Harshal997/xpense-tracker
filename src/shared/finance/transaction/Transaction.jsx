import React, { useContext, useState } from "react";
import styles from "./transaction.module.css";
import { CiPizza } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { VscEdit } from "react-icons/vsc";
import { MdCardTravel } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { WalletContext } from "../../../App";
import ManageExpense from "../../manage-expense/ManageExpense";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, addBalance } =
    useContext(WalletContext);
  const [editxn, setEditTxn] = useState();
  const [visible, setVisible] = useState(false);
  const deleteExpense = (id, price) => {
    deleteTransaction(id);
    addBalance(parseInt(price));
  };
  const handleEdit = (transaction) => {
    setVisible(true);
    setEditTxn(transaction);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.transaction}>
          <div className={styles.transactionInfoRow}>
            <div
              style={{
                padding: "0.3em 0.3em",
                backgroundColor: "#D9D9D9",
                borderRadius: 50,
              }}
            >
              {transaction.category === "food" ? (
                <CiPizza size={20} />
              ) : transaction.category === "travel" ? (
                <MdCardTravel />
              ) : (
                <FaGamepad />
              )}
            </div>
            <div className={styles.transactionInfoName}>
              <p>{transaction.name}</p>
              <p style={{ color: "#9B9B9B" }}>
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className={styles.transactionInfoRow}>
            <p>₹{transaction.price}</p>
            <button
              onClick={() => deleteExpense(transaction.id, transaction.price)}
              className={styles.transactionInfoButton}
              style={{ backgroundColor: " #FF3838" }}
            >
              <RxCrossCircled size={20} />
            </button>
            <button
              onClick={() => handleEdit(transaction)}
              className={styles.transactionInfoButton}
            >
              <VscEdit size={20} />
            </button>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <ManageExpense visible={visible} close={setVisible} txn={editxn} setEditTxn={setEditTxn}/>
    </>
  );
};
