import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_SHOW_LIMIT } from '../../common';
import FriendsList from '../components/FriendsList';
import NumberSelect from '../components/NumberSelect';
import { getNextFriend } from '../../data';
import { MAX_AGE_LIMIT } from '../../common';
import { actions } from '../state';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
} from '../state/selector';

export default function FriendMain() {
  // 사용법 1
  // const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
  //   (state) => [
  //     getAgeLimit(state),
  //     getShowLimit(state),
  //     getFriendsWithAgeLimit(state),
  //     getFriendsWithAgeShowLimit(state),
  //   ],
  //   shallowEqual,
  // );

  // 사용법 2
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(actions.setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix='세 이하만 보기'
      />
      <FriendsList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(actions.setValue('showLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix='명 이하만 보기 (연령 제한 적용'
      />
      <FriendsList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
