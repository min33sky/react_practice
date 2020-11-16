import React from 'react';
import { createStore, applyMiddleware } from 'redux';
const delayAction = (state) => (next) => (action) => {
  const delay = action.meta?.delay;
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);

  return function cancel() {
    console.log('취소');
    clearTimeout(timeoutId);
  };
};

const myReducer = (state = { name: 'mike' }, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') {
    return {
      name: 'mike2',
    };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(delayAction));
const cancel = store.dispatch({
  type: 'someAction',
  meta: {
    delay: 3000,
  },
});

cancel();

export default function App() {
  return <div>실전 리액트</div>;
}
