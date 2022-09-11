import PropTypes from 'prop-types';
import { TableTransactionHistory, TBody, THead, TableTd, TableTh,  } from './TransactionHistory.styled';

 const Transaction = ({ type, amount, currency}) => {
  return (
        <tr>
          <TableTd>{type}</TableTd>
          <TableTd>{amount}</TableTd>
          <TableTd>{currency}</TableTd>
        </tr>
  );
};

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