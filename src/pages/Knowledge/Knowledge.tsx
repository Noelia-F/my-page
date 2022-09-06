import React from 'react';
import './Knowledge.css';
import { useTranslation } from 'react-i18next';
import CardList from '../../components/CardList/CardList';
import LanguageSkills, { LanguageLevel } from '../../components/LanguageSkills/LanguageSkills';

const LANGUAGE_LIST: LanguageLevel[] = [
  {
    name: 'spanish',
    levelName: 'languageNative',
    level: 6,
  },
  {
    name: 'english',
    levelName: 'languageUpperIntermediate',
    level: 4,
  },
  {
    name: 'korean',
    levelName: 'languagePreIntermediate',
    level: 2,
  },
]

const Knowledge: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section App-section--contrast">
      <h2 className='App-title-section'>{t('knowledge')}</h2>
      <div className='App-section__content App-section__content--knowledge'>
        <CardList />
        <LanguageSkills languageList={LANGUAGE_LIST}/>
      </div>
    </section>
  );
}

export default Knowledge;
