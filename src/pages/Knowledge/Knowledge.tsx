import React from 'react';
import './Knowledge.css';
import { useTranslation } from 'react-i18next';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';

const Knowledge: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section App-section--contrast">
      <h2 className="App-subtitle">{t('knowledge')}</h2>
      <div className='App-section__content'>
        <WorkingProcess />
      </div>
    </section>
  );
}

export default Knowledge;
