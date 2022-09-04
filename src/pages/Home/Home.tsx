import React from 'react';
import './Home.css';
import SocialMedia from '../../components/Social-media/Social-media';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-home">
      <div className='App-home__content'>
        <article className="App-title-box">
          <h1 className="App-title">Noelia Frontón García</h1>
          <h2 className="App-subtitle">Front-End Developer</h2>
          <p className="App-description">{t('homeDescription')}</p>
          <SocialMedia />
        </article>
      </div>
      <div className='App-home__button'>
        <Button shape="circular" label="&#10148;" />
      </div>
    </section>
  );
}

export default Home;
