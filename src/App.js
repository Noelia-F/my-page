import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';

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
]

function App() {
  const [lightMode, setToggle] = useState(true);
  const changeMode =  function () {
    setToggle( !lightMode )
  };

  return (
    <div className={`App ${lightMode ? 'light-mode' : 'dark-mode'}`}>
      <Header links={links} onChangeMode={changeMode} />
      <section className="App-principal">
        <div className="App-title-box">
          <h1 className="App-title">Noelia Frontón García</h1>
          <h2 className="App-subtitle">Front-End Developer</h2>
          <p className="App-description">Desarrolladora web con conocimientos en diseño</p>
          <ul className="App-list App-social">
            <li className="App-item">Linkedin</li>
            <li className="App-item">GitHub</li>
            <li className="App-item">Email</li>
          </ul>
        </div>
      </section>
      <div>Mode: {lightMode}</div>
    </div>
  );
}

export default App;
