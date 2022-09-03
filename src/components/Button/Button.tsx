import React from 'react';
import './Button.css';

interface Props {
  shape: 'circular' | 'rectangle',
  label: string;
}

const Button: React.FunctionComponent<Props> = ({shape, label}) => {
  return (
    <button className={`App-button App-button--${shape}`}>
      {label}
    </button>
  );
}

export default Button;
