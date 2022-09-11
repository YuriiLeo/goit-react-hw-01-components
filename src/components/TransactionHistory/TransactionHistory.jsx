// Дані для списку доступні у форматі JSON у файлі transactions.json. Це масив об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти
// Опис компонента <TransactionHistory>
// Необхідно створити компонент <TransactionHistory>, який приймає один проп items – масив об'єктів транзакцій з transactions.json. Компонент створює розмітку таблиці. Кожна транзакція – це рядок таблиці. У прикладі наведена розмітка двох транзакцій.

import PropTypes from 'prop-types';

 const Transaction = ({ type, amount, currency}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const TransactionHistory = ({items}) => {
  return (
    <div>
      {items.map(item => (
        <Transaction key={item.id}type={item.type} amount={item.amount} currency={item.currency} />
        ))}
    </div>
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