import React from 'react';
import './Projects.css';
import {ReactComponent as Working} from '../../icons/working.svg';

const Projects: React.FunctionComponent = () => {
  return (
    <section className="App-section App-section--contrast">
      <h2 className="App-subtitle">Mis proyectos</h2>
      <Working />
      <span className='App-notes'>Image by <a className='App-link' href='https://pixabay.com/users/sara_torda-888816/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2298286'>Sara Torda</a> from <a className='App-link' href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2298286'>Pixabay</a></span>
      <p className='App-description'>Estamos trabajando en ello... &#9829;</p>
    </section>
  );
}

export default Projects;
