// Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.

// title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
// stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.
// Компонент повинен створювати DOM елемент наступної структури.

import PropTypes from 'prop-types';

export const Statistics = ({stats}) => {
  return (
  <section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>))}
  </ul>
  </section>  
  );
};

Statistics.protoType = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
    "label": PropTypes.string.isRequired,
    "percentage": PropTypes.number.isRequired,
    "id": PropTypes.string.isRequired,
  }),    
    ),
};