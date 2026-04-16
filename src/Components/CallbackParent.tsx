
import React, { useState } from 'react';
import CallbackChild from './CallbackChild';

const CallbackParent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const receiveDataFromChild = (data:string) => {
    setDataFromChild(data);
  };

  return (
    <>
      <p>{dataFromChild}</p>
      <CallbackChild sendDataToParent={receiveDataFromChild} />
    </>
  );
};

export default CallbackParent;