import React from 'react';
import './Language-skills.css';
import { useTranslation } from 'react-i18next';

export interface LanguageLevel {
  name: string;
  levelName: string;
  level: number;
}

interface Props {
  languageList: LanguageLevel[],
}

const LanguageSkills: React.FunctionComponent<Props> = ({languageList}) => {
  const { t } = useTranslation();
  const renderListOfLanguages = (languages: LanguageLevel[]) => {
    return languages.map(language => {
      return (
        <li className='App-languages-skills__item'>
          <div>
            <p className='App-text App-text--highlight'>{t(language.name)}</p>
            <span className='App-notes'>{t(language.levelName)}</span>
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
        </li>)
    });
  }
  return (
    <ul className='App-languages-skills'>
      {renderListOfLanguages(languageList)}
      {/* <li className='App-languages-skills__item'>
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
      </li> */}
    </ul>
  );
}

export default LanguageSkills;
