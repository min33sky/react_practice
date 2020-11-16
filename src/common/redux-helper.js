import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

// **********************************************************************************
// ? 단순히 상태의 키에 값만 할당하는 경우 아래의 함수 2개를 사용한다.
// **********************************************************************************

/**
 * @param {string} type 액션 타입
 */
export function createSetValueAction(type) {
  return (key, value) => ({
    type,
    key,
    value,
  });
}

export function setValueReducer(state, action) {
  state[action.key] = action.value;
}
