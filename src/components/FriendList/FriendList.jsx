// Опис компонента <FriendList>
// Компонент повинен приймати один проп friends – масив об'єктів друзів.

// Компонент повинен створювати DOM наступної структури.

// <ul class="friend-list">
//   <!-- Довільна кіл-сть FriendListItem -->
// </ul>

// Опис компонента <FriendListItem>
// Компонент повинен приймати кілька пропів:

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.

// Компонент повинен створювати DOM наступної структури.

// import friends from "path/to/friends.json";
import PropTypes from 'prop-types';

const Friend = ({ avatar, name }) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};


export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} status={friend.isOnline} avatar={friend.avatar} name={friend.name} />
      ))}
    </ul>
  );
};

FriendList.protoType = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
    "name": PropTypes.string.isRequired,
    "avatar": PropTypes.string.isRequired,
    "isOnline": PropTypes.bool.isRequired,
    "id": PropTypes.number.isRequired,
  }),    
    ),
};