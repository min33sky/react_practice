import React, { useCallback, useState } from 'react';

function UseCallbackEx() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [v1, setV1] = useState(0);

  /**
   *? 프로퍼티에 함수를 넣으면 랜더링될 때마다 함수를 새로 만들기 때문에
   *? 자식 컴포넌트가 memo를 사용했다 하더라도 값이 달라지기 때문에
   *? 자식 컴포넌트도 랜더링이 된다.
   */
  const onSave = useCallback(() => {
    saveToServer(name, age);
  }, [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <p>{`v1 is ${v1}`}</p>
      <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log('UseEdit Render');
  return null;
});

function saveToServer(name, age) {}

export default UseCallbackEx;
