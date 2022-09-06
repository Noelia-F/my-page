import React from 'react';
import './ProgressBar.css';

interface Props {
  total: number;
  progressNumber: number,
  label: string;
}

const ProgressBar: React.FunctionComponent<Props> = ({total, progressNumber, label}) => {
  const renderListOfDots = (total: number) => {
    const dotList = new Array(total).fill('dot');
    return dotList.map( (dot, index) => (
      <li key={`progress-${label}-${index}`} className={`App-progress-bar__dot ${index < progressNumber ? 'completed' : ''}`} aria-label={label}>
      </li>
    ));
  }
  return (
    <ul className='App-progress-bar'>
      {renderListOfDots(total)}
    </ul>
  );
}

export default ProgressBar;
