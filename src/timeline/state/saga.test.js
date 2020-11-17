import { cloneableGenerator } from '@redux-saga/testing-utils';
import { actions } from '.';
import { fetchData } from './saga';
import { put, call } from 'redux-saga/effects';
import { callApiLike } from './../../common/api';

/**
 ** 사가는 api를 직접 호출하는 게 아니라
 ** api를 호출하라는 객체가 나오는지만 검사하면 되기 때문에
 ** 테스트하기가 쉽다
 */

describe('fetchData', () => {
  const timeline = { id: 1 };
  const action = actions.requestLike(timeline); // 액션 객체
  const gen = cloneableGenerator(fetchData)(action); // 제너레이터 객체
  expect(gen.next().value).toEqual(put(actions.setLoading(true)));
  expect(gen.next().value).toEqual(put(actions.addLike(timeline.id, 1)));
  expect(gen.next().value).toEqual(put(actions.setValue('error', '')));
  expect(gen.next().value).toEqual(call(callApiLike));

  it('on fail callApiLike', () => {
    const gen2 = gen.clone();
    const errorMsg = 'error';
    expect(gen2.throw(errorMsg).value).toEqual(put(actions.setValue('error', errorMsg)));
    expect(gen2.next().value).toEqual(put(actions.addLike(timeline.id, -1)));
    expect(gen2.next(Promise.resolve()).value).toEqual(put(actions.setLoading(false)));
  });

  it('on success callApiLike', () => {
    const gen2 = gen.clone();
    expect(gen2.next(Promise.resolve()).value).toEqual(put(actions.setLoading(false)));
  });
});
