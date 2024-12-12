import React, { useState, useContext } from "react";
import styles from "./manageExpense.module.css";
import { WalletContext } from "../../App";

const ManageExpense = ({ visible, close, txn, setEditTxn }) => {
  console.log("txnnnnn: ",txn)
  const {
    addBalance,
    addTransaction,
    subtractBalance,
    transactions,
    wallet,
    editTransaction,
  } = useContext(WalletContext);
  const [name, setName] = useState(() => {return txn ? txn.name : ""});
  const [price, setPrice] = useState(() => {return txn ? txn.price : 0});
  const [category, setCategory] = useState(() => {return txn ? txn.category : "entertainment"});
  const [date, setDate] = useState(() => {return txn ? txn.date : new Date()});

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
        if (wallet >= price - txn.price) {
          editTransaction(transaction);
          addBalance(price - txn.price);
        } else {
          alert("Insufficient wallet balance!");
        }
        setEditTxn(null);
        close(false);
      }
    } else {
      if (name && price && category && date) {
        const transaction = {
          id: Date.now(), //uuid
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
        <h2 style={{ fontFamily: "Ubuntu" }}>
          {txn ? "Edit Expense" : "Add Expense"}
        </h2>
        <div className={styles.inputs}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Title"
            className={styles.input}
            type="text"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className={styles.input}
            type="number"
          />
          <select
            value={category}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="dd/mm/yyyy"
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
