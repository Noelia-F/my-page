import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';

function App() {
  const links = [
    {
      id: 'nav-principal', 
      path: '#',
      name: 'Principal',
    },
    {
      id: 'nav-projects', 
      path: '#',
      name: 'Proyectos',
    },
    {
      id: 'nav-aboutme', 
      path: '#',
      name: 'Sobre mí',
    },
    {
      id: 'nav-career', 
      path: '#',
      name: 'Trayectoria',
    },
    {
      id: 'nav-knowledge', 
      path: '#',
      name: 'Conocimientos',
    },
  ];
  const socialMedia = [
    {
      id: 'linkedin',
      name: 'Linkedin',
      path: '#',
      email: false,
    },
    {
      id: 'github',
      name: 'Github',
      path: '#',
      email: false,
    },
    {
      id: 'email',
      name: 'Email',
      path: '#',
      email: true,
    },
  ]
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
