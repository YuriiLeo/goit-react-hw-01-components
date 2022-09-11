import PropTypes from 'prop-types';
import { FriendListContainer, Item, Status, Avatar, FriendName } from './FriendList.styled';

const Friend = ({ avatar, name, status }) => {
  return (
    <Item>
      <Status isOnline={status}></Status>
      <Avatar src={avatar} alt={name}/>
      <FriendName>{name}</FriendName>
    </Item>
  );
};


export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <Friend key={friend.id} status={friend.isOnline} avatar={friend.avatar} name={friend.name} />
      ))}
    </FriendListContainer>
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