import styles from "./Profile.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((transaction, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>{transaction.type}</td>
              <td className={styles.td}>{transaction.amount}</td>
              <td className={styles.td}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
