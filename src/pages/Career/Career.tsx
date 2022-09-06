import React from 'react';
import './Career.css';
import {ReactComponent as Working} from '../../icons/working.svg';
import { useTranslation } from 'react-i18next';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';

const Career: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section">
      <h2 className='App-title-section'>{t('career')}</h2>
      <div className='App-section__content'>
        <WorkingProcess />
      </div>
    </section>
  );
}

export default Career;
