import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '../../models/Link.model';
import Languages from '../Languages/Languages';
import ModeToggle from '../ModeToggle/ModeToggle';
import './Header.css';

interface Props {
  onChangeMode(): any;
}

const Header: React.FunctionComponent<Props> = ({onChangeMode}) => {
  const [toggleButton, setToggle] = useState(false);
  const { t } = useTranslation();
  const changeMode =  function () {
    setToggle( !toggleButton )
  };
  const NAV_LINKS: Link[] = [
    {
      id: 'nav-home', 
      path: '#page-home',
      name: 'home',
    },
    {
      id: 'nav-projects', 
      path: '#page-projects',
      name: 'projects',
    },
    {
      id: 'nav-career', 
      path: '#page-career',
      name: 'career',
    },
    {
      id: 'nav-knowledge', 
      path: '#page-knowledge',
      name: 'knowledge',
    },
  ];
  const renderListOfLinks = (links: Link[]) => {
    return links.map(link => <a href={link.path} key={link.id}  onClick={() => changeMode()} className="App-link--menu">{t(link.name)}</a>);
  }
  return (
    <header className='App-header'>
      <section className={`App-menu ${toggleButton ? 'App-menu--opened' : 'App-menu--closed'}`} >
        <div className='App-nav-background' onClick={() => changeMode()}></div>
        <button className='App-burger' onClick={() => changeMode()}>
          <span className='App-burger-bar App-burger-bar--top'></span>
          <span className='App-burger-bar App-burger-bar--middle'></span>
          <span className='App-burger-bar App-burger-bar--bottom'></span>
        </button>
        <nav className="App-nav">
          {renderListOfLinks(NAV_LINKS)}
        </nav>
      </section>
      <section className='App-header__config'>
        <Languages />
        <ModeToggle onClickChangeMode={onChangeMode} />
      </section>
    </header>
  );
}

export default Header;
