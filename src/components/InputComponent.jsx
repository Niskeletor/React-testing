import React from 'react';
import { inputText } from '../stores/store';

const InputComponent = () => {
  const updateText = (event) => {
    inputText.set(event.target.value);
  };

  return <input type="text" onChange={updateText} />;
};

export default InputComponent;
