import React, { useState, useEffect } from 'react';
import { inputText } from '../stores/store';

const DisplayComponent = () => {
  const [text, setText] = useState(inputText.get());

  useEffect(() => {
    const unsubscribe = inputText.subscribe(setText);
    return () => unsubscribe();
  }, []);

  return <div>{text}</div>;
};

export default DisplayComponent;
