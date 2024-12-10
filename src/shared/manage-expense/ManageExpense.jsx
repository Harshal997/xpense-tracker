import React, { useState, useContext } from "react";
import styles from "./manageExpense.module.css";
import { WalletContext } from "../../App";

const ManageExpense = ({ visible, close, txn, setEditTxn }) => {
  console.log("txn",txn)
  const {
    addBalance,
    addTransaction,
    subtractBalance,
    transactions,
    wallet,
    editTransaction,
  } = useContext(WalletContext);
  const [name, setName] = useState(txn ? txn.name : "");
  const [price, setPrice] = useState(txn ? txn.price : 0);
  const [category, setCategory] = useState(
    txn ? txn.category : "entertainment"
  );
  const [date, setDate] = useState(txn ? txn.date : new Date());

  const handleAddExpense = () => {
    if (txn) {
      if (name && price && category && date) {
        const transaction = {
          ...txn,
          name,
          price,
          category,
          date,
        };
        if (wallet >= txn.price - price) {
          editTransaction(transaction);
          addBalance(txn.price - price);
        } else {
          alert("Insufficient wallet balance!");
        }
        setEditTxn(null);
        close(false);
      }
    } else {
      if (name && price && category && date) {
        const transaction = {
          id: transactions.length,
          name,
          price,
          category,
          date,
        };
        if (wallet >= price) {
          addTransaction(transaction);
          subtractBalance(price);
        } else {
          alert("Insufficient wallet balance!");
        }
        close(false);
      }
    }
  };

  return (
    <div
      className={styles.expense}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div
        style={{
          backgroundColor: "#EFEFEF",
          padding: "1em 2em",
          display: "flex",
          flexDirection: "column",
          rowGap: "1em",
          borderRadius: 15,
        }}
      >
        <h2 style={{ fontFamily: "Ubuntu" }}>Add Expense</h2>
        <div className={styles.inputs}>
          <input
            onChange={(e) => setName(e.target.value)}
            placeHolder="Title"
            className={styles.input}
            type="text"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeHolder="Price"
            className={styles.input}
            type="number"
          />
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="top"
            id="top"
            style={{ borderRadius: 10, padding: "1em", fontFamily: "Ubuntu" }}
          >
            <option value="entertainment">Entertainment</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </select>
          <input
            onChange={(e) => setDate(e.target.value)}
            placeHolder="dd/mm/yyyy"
            className={styles.input}
            type="date"
          />
          <button onClick={handleAddExpense} className={styles.expButton}>
            {txn ? "Edit Expense" : "Add Expense"}
          </button>
          <button onClick={() => close(false)} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageExpense;
