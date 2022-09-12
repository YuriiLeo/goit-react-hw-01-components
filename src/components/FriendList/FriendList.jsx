import PropTypes from 'prop-types';
import { FriendListContainer, Item, Status, Avatar, FriendName } from './FriendList.styled';

export const FriendList = ({ friends}) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => (
      <Item key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name}/>
      <FriendName>{name}</FriendName>
    </Item>
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