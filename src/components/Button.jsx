import React, { useState } from 'react';

export default (props) => {
  const [count, setCount] = useState(0); // Inicializa `count` a 0

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0); // Corrección: Declaración correcta de la función reset

  return (
    <div>
      <button onClick={increment}>Incrementar</button> {/* Corrección: Asigna el evento onClick */}
      <button onClick={decrement}>Decrementar</button> {/* Corrección: Asigna el evento onClick */}
      <button onClick={reset}>Reset</button> {/* Corrección: Asigna el evento onClick */}
      <p>{count}</p> {/* Muestra el valor de count */}
    </div>
  );
}