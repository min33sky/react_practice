import { createSelector } from 'reselect';

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit render');
    return friends.filter((friend) => friend.age <= ageLimit);
  },
);

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit render');
    return friendsWithAgeLimit.slice(0, showLimit);
  },
);
