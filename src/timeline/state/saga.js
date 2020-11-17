import { types, actions } from './index';
import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue('error', ''));
  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue('error', error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

export function* trySetText(action) {
  yield put(actions.setValue('text', action.text));
}

export default function* saga() {
  yield all([
    takeLatest(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText), //? 0.5초간 액션이 발생 안할 시 worker 호출
  ]);
}
