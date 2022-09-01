import React from 'react';
import ModeToggle from '../Mode-Toggle/Mode-toggle';
import './Header.css';

function Header({links, onChangeMode}) {
  const renderListOfLinks = (links) => {
    return links.map(link => <a href={link.path} key={link.id} className="App-link">{link.name}</a>);
  }
  return (
    <header className="App-header">
      <nav className="App-nav">
        {renderListOfLinks(links)}
      </nav>
      <ModeToggle onClickChangeMode={onChangeMode} />
    </header>
  );
}

export default Header;
