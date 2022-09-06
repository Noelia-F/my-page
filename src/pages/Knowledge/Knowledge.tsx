import React from 'react';
import './Knowledge.css';
import { useTranslation } from 'react-i18next';
import CardList from '../../components/CardList/CardList';

const Knowledge: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section App-section--contrast">
      <h2 className='App-title-section'>{t('knowledge')}</h2>
      <div className='App-section__content App-section__content--knowledge'>
        <CardList />
        <ul className='App-languages-skills'>
          <li className='App-languages-skills__item'>
            <div>
              <p className='App-text App-text--highlight'>Español</p>
              <span className='App-notes'>Nativo</span>
            </div>
            <ul className='App-languages-skills__bar'>
              <li className='App-languages-skills__level completed' aria-label='language-begginer'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-pre-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-upper-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-advance'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-native'>
              </li>
            </ul>
          </li>
          <li className='App-languages-skills__item'>
            <div>
              <p className='App-text App-text--highlight'>Inglés</p>
              <span className='App-notes'>Intermedio-alto</span>
            </div>
            <ul className='App-languages-skills__bar'>
              <li className='App-languages-skills__level completed' aria-label='language-begginer'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-pre-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-upper-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-advance'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-native'>
              </li>
            </ul>
          </li>
          <li className='App-languages-skills__item'>
            <div>
              <p className='App-text App-text--highlight'>Español</p>
              <span className='App-notes'>Pre-intermedio</span>
            </div>
            <ul className='App-languages-skills__bar'>
              <li className='App-languages-skills__level completed' aria-label='language-begginer'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-pre-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-upper-intermediate'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-advance'>
              </li>
              <li className='App-languages-skills__level' aria-label='language-native'>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Knowledge;
