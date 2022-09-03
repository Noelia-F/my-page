import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import { NAV_LINKS } from './shared/constants'; 

function App() {
  const links = NAV_LINKS;

  const [lightMode, setToggle] = useState(true);
  const changeMode =  function () {
    setToggle( !lightMode )
  };

  return (
    <div className={`App ${lightMode ? 'light-mode' : 'dark-mode'}`}>
      <Header links={links} onChangeMode={changeMode} />
      <Principal/>
      <footer>
        Footer here...
      </footer>
    </div>
  );
}

export default App;
