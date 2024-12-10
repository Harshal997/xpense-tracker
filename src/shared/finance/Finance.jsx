import { useContext, useState } from "react";
import styles from './finance.module.css'
import { WalletContext } from "../../App";
import AddBalance from "../manage-expense/AddBalance";
import ManageExpense from "../manage-expense/ManageExpense";

export const Finance = ({income}) => {
  const { wallet, transactions} = useContext(WalletContext);
  const [expenseSum, setExpenseSum] = useState(
    transactions.reduce((total, curr) => {
      return total + (Number(curr.price) || 0);
    }, 0)
  );
  const [clicked, setClicked] = useState(false);
  return (
    <>
    <div className={styles.fundContainer}>
      {
        income ? <p className={styles.fundText}>Wallet Balance: <span>₹{wallet}</span></p> : <p className={styles.fundText}>Expenses: <span>₹{expenseSum}</span></p>
      }
      <button onClick={() => setClicked(true)} className={income ? styles.fundButtonIncome : styles.fundButtonExpense}>{income ? "+ Add Income" : "+ Add Expense"}</button>
    </div>
    <AddBalance visible={income && clicked} close={setClicked}/>
    <ManageExpense visible={!income && clicked} close={setClicked}/>
    </>
  )
}
