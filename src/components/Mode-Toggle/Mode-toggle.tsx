import React from 'react';
import './Mode-toggle.css';

interface Props {
  onClickChangeMode(): any;
}

const ModeToggle: React.FunctionComponent<Props> = ({onClickChangeMode}) => {
  return (
    <button className="App-toggle" onClick={onClickChangeMode}>
      <div className="App-toggle__circle"></div>
    </button>
  );
}

export default ModeToggle;
