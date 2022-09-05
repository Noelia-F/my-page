import React from 'react';
import './Knowledge.css';
import { useTranslation } from 'react-i18next';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';
import Images from '../../assets/images/index';

const Knowledge: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const renderListOfImages = (images: any) => {
    return Object.keys(images).map(key => <li className='App-card-item'><img alt='js' src={images[key]} /></li>);
  }
  return (
    <section className="App-section App-section--contrast">
      <h2 className="App-subtitle">{t('knowledge')}</h2>
      <div className='App-section__content'>
        <ul className='App-card-list'>
          {renderListOfImages(Images)}
        </ul>
      </div>
    </section>
  );
}

export default Knowledge;
