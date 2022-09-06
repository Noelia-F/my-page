import React from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';

const Projects: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section App-section--contrast">
      <h2 className='App-title-section'>{t('projects')}</h2>
      <div className='App-section__content'>
        <WorkingProcess />
      </div>
    </section>
  );
}

export default Projects;
