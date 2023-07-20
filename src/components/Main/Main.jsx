import React from 'react';
import './Main.css';

function Main() {
  
  const meva = 'olma';
  // addBtn.onclick
  // addBtn.addEventListener

  const addHandler = () => {
    alert(meva);
  };
  const handleChange = () => {};

  return (
    <main className="">
      <input onChange={handleChange} type="text" />
      <h2>main qismi</h2>
      <h2>menda {meva} bor</h2>
      <button onClick={addHandler}>add</button>
    </main>
  );
}

export default Main;
