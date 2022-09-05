import React from 'react';
import './CardList.css';
import Images from '../../assets/images/index';

const CardList: React.FunctionComponent = () => {
  const renderListOfImages = (images: any) => {
    return Object.keys(images).map(key => <li className='App-card-item'><img alt='js' src={images[key]} /></li>);
  }
  return (
    <ul className='App-card-list'>
      {renderListOfImages(Images)}
    </ul>
  );
}

export default CardList;
