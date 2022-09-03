import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Career from './pages/Career/Career';
import Knowledge from './pages/Knowledge/Knowledge';
import Principal from './pages/Principal/Principal';
import Projects from './pages/Projects/Projects';
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
      <Projects/>
      <Career />
      <Knowledge />
      <Footer />
    </div>
  );
}

export default App;
