import PropTypes from 'prop-types';
import {
  ProfileWrapper, Description, Avatar, Name, Tag, Location, Stats, StatsContainer, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
    <Description>
      <Avatar
        src={avatar}
        alt={username}
      />
        <Name className="name">{ username }</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{ location }</Location>
      </Description>
    <Stats className="stats">
      <StatsContainer>
        <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
      </StatsContainer>
      <StatsContainer>
        <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views }</Quantity>
      </StatsContainer>
      <StatsContainer>
        <Label className="label">Likes</Label>
          <Quantity className="quantity">{ stats.likes}</Quantity>
      </StatsContainer>
    </Stats>
  </ProfileWrapper>);
};

Profile.protoType = {
  user: {
    "username": PropTypes.string.isRequired,
    "tag": PropTypes.string.isRequired,
    "location": PropTypes.string.isRequired,
    "avatar": PropTypes.string.isRequired,
    "stats":  PropTypes.exact ({
      "followers": PropTypes.number.isRequired,
      "views": PropTypes.number.isRequired,
      "likes": PropTypes.number.isRequired
    }),
  }
};