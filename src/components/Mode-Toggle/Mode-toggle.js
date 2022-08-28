import './Mode-toggle.css';

function ModeToggle({onClickChangeMode}) {
  return (
    <button className="App-toggle" onClick={onClickChangeMode}>
      <div className="App-toggle__circle"></div>
    </button>
  );
}

export default ModeToggle;
