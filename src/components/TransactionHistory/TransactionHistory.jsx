import PropTypes from 'prop-types';
import { TableTransactionHistory, TBody, THead, TableTh, } from './TransactionHistory.styled';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({items}) => {
  return (
    <TableTransactionHistory className="transaction-history">
      <THead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </THead>
      <TBody>
       {items.map(item => (
        <Transaction key={item.id}type={item.type} amount={item.amount} currency={item.currency} />
        ))}
      </TBody>
    </TableTransactionHistory>
  );
};


TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
    "id": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "amount": PropTypes.string.isRequired,
    "currency": PropTypes.string.isRequired,
  }),    
  ),
};