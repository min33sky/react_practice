import React, { createContext, useContext, useReducer } from 'react';

const ProfileDispatch = createContext(null);

function UseReducerEx2() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <Test />
      </ProfileDispatch.Provider>
    </div>
  );
}

function Test() {
  const dispatch = useContext(ProfileDispatch);

  return (
    <div>
      <p>Test Component</p>
      <button
        onClick={() =>
          dispatch({
            type: 'setAge',
            age: Math.random() * 50,
          })
        }
      >
        나이 바꾸기
      </button>
    </div>
  );
}

const INITIAL_STATE = {
  name: 'empty',
  age: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.name,
      };

    case 'setAge': {
      return {
        ...state,
        age: action.age,
      };
    }

    default:
      return state;
  }
}

export default UseReducerEx2;
