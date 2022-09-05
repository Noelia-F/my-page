import React from 'react';
import './Knowledge.css';
import { useTranslation } from 'react-i18next';
import CardList from '../../components/CardList/CardList';

const Knowledge: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section App-section--contrast">
      <h2 className="App-subtitle">{t('knowledge')}</h2>
      <div className='App-section__content App-section__content--knowledge'>
        <CardList />
        <article className='App-languages-skills'>
          <h3>Idiomas</h3>
          <ul className='App-languages-skills-list'>
            <li>
              <p>Español</p>
              <span>Nativo</span>
            </li>
            <li>
              <p>Inglés</p>
              <span>Intermedio-alto</span>
            </li>
            <li>
              <p>Coreano</p>
              <span>Pre-intermedio</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Knowledge;
