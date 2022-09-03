import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from './shared/constants'; 

function App() {
  const links = NAV_LINKS;
  const socialMedia =SOCIAL_MEDIA_LINKS;

  const [lightMode, setToggle] = useState(true);
  const changeMode =  function () {
    setToggle( !lightMode )
  };

  return (
    <div className={`App ${lightMode ? 'light-mode' : 'dark-mode'}`}>
      <Header links={links} onChangeMode={changeMode} />
      <Principal socialMedia={socialMedia}/>
      <footer>
        Footer here...
      </footer>
    </div>
  );
}

export default App;
