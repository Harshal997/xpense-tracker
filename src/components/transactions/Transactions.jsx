import { useContext, useState } from "react";
import { Transaction } from "../../shared/finance/transaction/Transaction";
import styles from "./transactions.module.css";
import { WalletContext } from "../../App";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BarChart } from "../Chart";

export const Transactions = () => {
  const { wallet, transactions } = useContext(WalletContext);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const handlePrev = () => {
    if (start > 0) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  };
  const handleNext = () => {
    if (end < transactions.length) {
      setStart(start + 3);
      setEnd(end + 3);
    }
  };
  return (
    <div style={{ padding: "2em" }}>
      <h2
        style={{
          color: "white",
          fontFamily: "Ubuntu",
          fontStyle: "italic",
          margin: "0.5em 0",
        }}
      >
        Recent Transactions
      </h2>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={styles.transactionsContainer}>
          {transactions &&
            transactions.length &&
            transactions
              .slice(start, end)
              .map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
              ))}
          {transactions && transactions.length > 3 && (
            <div
              style={{ display: "flex", alignSelf: "center", columnGap: 20 }}
            >
              <button className={styles.arrowBtn} onClick={handlePrev}>
                <FaArrowLeftLong />
              </button>
              <div
                style={{
                  backgroundColor: "#43967B",
                  padding: "6px 10px",
                  borderRadius: 7,
                }}
              >
                <p style={{ fontFamily: "Ubuntu", color: "white" }}>
                  {end - start}
                </p>
              </div>
              <button className={styles.arrowBtn} onClick={handleNext}>
                <FaArrowRightLong />
              </button>
            </div>
          )}
        </div>
        <BarChart />
      </div>
    </div>
  );
};
