import React from 'react';
import SocialMedia from '../Social-media/Social-media';
import './Footer.css';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className='App-footer'>
      <p>ⒸCopyright - 2022</p>
      <SocialMedia color='principal' />
      <p>Home-made 	&#10084;</p>
    </footer>
  );
}

export default Footer;