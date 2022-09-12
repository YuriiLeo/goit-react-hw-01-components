import PropTypes from 'prop-types';
import { TableTd } from './Transaction.styled';

export  const Transaction = ({ type, amount, currency}) => {
  return (
        <tr>
          <TableTd>{type}</TableTd>
          <TableTd>{amount}</TableTd>
          <TableTd>{currency}</TableTd>
        </tr>
  );
};

Transaction.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
    "type": PropTypes.string.isRequired,
    "amount": PropTypes.string.isRequired,
    "currency": PropTypes.string.isRequired,
  }),    
    ),
};