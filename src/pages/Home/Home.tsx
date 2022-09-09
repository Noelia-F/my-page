import React from 'react';
import './Home.css';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-home" id='page-home'>
      <div className='App-home__content'>
        <article className="App-title-box">
          <h1 className="App-title">Noelia Frontón García</h1>
          <h2 className='App-title-subtitle'>Front-End Developer</h2>
          <p className="App-description">{t('homeDescription')}</p>
          <SocialMedia color='contrast' />
        </article>
      </div>
      <a className='App-home__action' href='#page-projects'>&#10148;</a>
    </section>
  );
}

export default Home;
