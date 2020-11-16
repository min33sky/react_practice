import React, { useEffect, useRef, useState } from 'react';

function UseRef() {
  const [age, setAge] = useState(0);
  const prevAgeRef = useRef(20);

  //! useEffect는 DOM이 랜더링 된 후 비동기적으로 호출된다.
  useEffect(() => {
    //* 랜더링 후 age 값으로 ref 값이 업데이트 된다.
    prevAgeRef.current = age;
  }, [age]);

  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}

export default UseRef;
