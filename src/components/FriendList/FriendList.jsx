import PropTypes from 'prop-types';
import { List, ListItem, ActivityMark, AvatarImg } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ListItem key={id}>
          <ActivityMark status={isOnline}></ActivityMark>
          <AvatarImg src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
