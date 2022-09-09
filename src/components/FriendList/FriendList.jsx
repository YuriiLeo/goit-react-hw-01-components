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

// <FriendList friends={friends} />;

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>

