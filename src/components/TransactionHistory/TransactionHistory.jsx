import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHeader}>
        <tr className={css.transactionDescr}>
          <th className={css.transactionTitle}>Type</th>
          <th className={css.transactionTitle}>Amount</th>
          <th className={css.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
      {items.map((item) => (
        <tr className={css.transactionDescr} key={item.id}>
          <td className={css.transactionValue}>{item.type}</td>
          <td className={css.transactionValue}>{item.amount}</td>
          <td className={css.transactionValue}>{item.currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}
