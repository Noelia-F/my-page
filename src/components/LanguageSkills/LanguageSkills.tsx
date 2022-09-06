import React from 'react';
import './LanguageSkills.css';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../ProgressBar/ProgressBar';

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
        <li key={`language-skill-${language.name}`} className='App-languages-skills__item'>
          <div>
            <p className='App-text App-text--highlight'>{t(language.name)}</p>
            <span className='App-notes'>{t(language.levelName)}</span>
          </div>
          <ProgressBar total={6} progressNumber={language.level} label={language.levelName}/>
        </li>)
    });
  }
  return (
    <ul className='App-languages-skills'>
      {renderListOfLanguages(languageList)}
    </ul>
  );
}

export default LanguageSkills;
