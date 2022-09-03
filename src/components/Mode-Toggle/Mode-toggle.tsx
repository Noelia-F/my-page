import React from 'react';
import './Mode-toggle.css';

function ModeToggle({onClickChangeMode}: {onClickChangeMode: any}) {
  return (
    <button className="App-toggle" onClick={onClickChangeMode}>
      <div className="App-toggle__circle"></div>
    </button>
  );
}

export default ModeToggle;
