import React, {useState} from 'react';
import ModeToggle from '../Mode-Toggle/Mode-toggle';
import './Header.css';

function Header({links, onChangeMode}) {
  const [toggleButton, setToggle] = useState(false);
  const changeMode =  function () {
    setToggle( !toggleButton )
  };
  const renderListOfLinks = (links) => {
    return links.map(link => <a href={link.path} key={link.id} className="App-link">{link.name}</a>);
  }
  return (
    <header className="App-header">
      <section className={`App-menu ${toggleButton ? 'App-menu--opened' : 'App-menu--closed'}`} >
        <div className="App-nav-background" onClick={() => changeMode()}></div>
        <button className="App-button" onClick={() => changeMode()}>
          <span className='App-button-bar App-button-bar--top'></span>
          <span className='App-button-bar App-button-bar--middle'></span>
          <span className='App-button-bar App-button-bar--bottom'></span>
        </button>
        <nav className="App-nav">
          {renderListOfLinks(links)}
        </nav>
      </section>
      <ModeToggle onClickChangeMode={onChangeMode} />
    </header>
  );
}

export default Header;
