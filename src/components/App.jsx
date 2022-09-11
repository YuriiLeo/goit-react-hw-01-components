import user from "components/DataJSON/user.json";
import friends from "components/DataJSON/friends.json";
import data from "components/DataJSON/data.json";
import transactions from "components/DataJSON/transactions.json";

import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />

    </Container>
  );
};
