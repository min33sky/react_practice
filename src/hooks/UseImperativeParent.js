import React, { useRef } from 'react';
import UseImperativeEx from './UseImperativeEx';

function UseImperativeParent() {
  const ref = useRef(null);

  const onClick = () => {
    if (ref.current) {
      console.log('current name length', ref.current.getNameLength());
      ref.current.addAge(5);
    }
  };

  return (
    <div>
      <UseImperativeEx ref={ref} />
      <button onClick={onClick}>Add Age 5</button>
    </div>
  );
}

export default UseImperativeParent;
