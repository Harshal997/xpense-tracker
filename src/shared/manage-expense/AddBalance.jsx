import { useState, useContext } from 'react'
import styles from "./manageExpense.module.css"
import { WalletContext } from "../../App";

const AddBalance = ({ visible, close }) => {
    const { addBalance } = useContext(WalletContext);
    const [amount, setAmount] = useState(0);
    const handleAdd = () => {
        addBalance(amount);
        close(false);
    }
    return (
        <div className={styles.expense} style={{ display: visible ? 'flex' : 'none' }}>
            <div style={{ backgroundColor: "#EFEFEF", padding: "1em 2em", display: 'flex', flexDirection: 'column', rowGap: '1em', borderRadius: 15 }}>
                <h2 style={{ fontFamily: "Ubuntu" }}>Add Expense</h2>
                <div className={styles.inputs}>
                    <input onChange={(e) => setAmount(e.target.value)} placeHolder="Income Amount" className={styles.input} type="number" />
                    <button onClick={handleAdd} className={styles.expButton} style={{ padding: "0 1em" }}>Add Expense</button>
                    <button onClick={() => close(false)} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddBalance