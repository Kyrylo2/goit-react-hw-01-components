import PropTypes from 'prop-types';
import {
  ProfileCard,
  InfoContainer,
  ProfileName,
  ProfileInfo,
  Discription,
  ProfileImg,
  ProfileStats,
} from './Profile.styled.js';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Discription>
        <ProfileImg src={avatar} alt="User avatar" />
        <InfoContainer>
          <ProfileName>{username}</ProfileName>
          <ProfileInfo>@{tag}</ProfileInfo>
          <ProfileInfo>{location}</ProfileInfo>
        </InfoContainer>
      </Discription>

      <ProfileStats>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
