import React, { forwardRef, useImperativeHandle, useState } from 'react';

function UseImperativeEx(_, ref) {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Ddahyoni');

  useImperativeHandle(ref, () => {
    return {
      addAge: (value) => setAge(age + value),
      getNameLength: () => name.length,
    };
  });

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default forwardRef(UseImperativeEx);
