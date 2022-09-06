import React from 'react';
import SocialMedia from '../Social-media/Social-media';
import './Footer.css';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className='App-footer'>
      <p className='App-text'>ⒸCopyright - 2022</p>
      <SocialMedia color='principal' />
      <p className='App-text'>Home-made 	&#10084;</p>
    </footer>
  );
}

export default Footer;