import React from 'react';
import './WorkingProcess.css';
import {ReactComponent as Working} from '../../assets/icons/working.svg';
import { useTranslation } from 'react-i18next';

const WorkingProcess: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <article className='App-working-process'>
      <div className='App-working-process__image'>
        <Working />
        <span className='App-notes'>Image by <a className='App-link' href='https://pixabay.com/users/sara_torda-888816/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2298286'>Sara Torda</a> from <a className='App-link' href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2298286'>Pixabay</a></span>
      </div>
      <p className='App-text'>{t('workingProcess')} &#9829;</p>
    </article>
  );
}

export default WorkingProcess;
