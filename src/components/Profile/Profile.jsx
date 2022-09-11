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
        <Name>{ username }</Name>
        <Tag>@{tag}</Tag>
        <Location>{ location }</Location>
      </Description>
    <Stats>
      <StatsContainer>
        <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
      </StatsContainer>
      <StatsContainer>
        <Label>Views</Label>
          <Quantity>{stats.views }</Quantity>
      </StatsContainer>
      <StatsContainer>
        <Label>Likes</Label>
          <Quantity>{ stats.likes}</Quantity>
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