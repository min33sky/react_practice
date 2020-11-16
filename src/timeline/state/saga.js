import { types, actions } from './index';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* saga() {
  yield all([takeLatest(types.REQUEST_LIKE, fetchData)]);
}
