import React from 'react';
import './Tag.css';

interface Props {
  label: string;
  color: 'principal' | 'contrast' | 'secondary';
}

const Tag: React.FunctionComponent<Props> = ({label, color}) => {
  return (
    <span className={`App-tag App-tag--${color}`}>{label}</span>
  );
}

export default Tag;
