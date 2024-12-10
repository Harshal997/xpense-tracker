import React from 'react'
import styles from "./manageExpense.module.css"

const ManageExpense = () => {
  return (
    <div className={styles.expense}>
        <div style={{backgroundColor: "#EFEFEF", padding: "1em 2em", display: 'flex', flexDirection: 'column', rowGap: '1em'}}>
            <h2>Add Expense</h2>
            <div className={styles.inputs}>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default ManageExpense