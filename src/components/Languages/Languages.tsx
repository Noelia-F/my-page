import React, {useState} from 'react';
import './Languages.css';

const Languages: React.FunctionComponent = () => {
  const [language, setLanguage] = useState('es');
  const onChangeLanguage =( event: any) => {
    setLanguage(event.target.value);
  }
  return (
    <select className='App-languages' value={language} onChange={onChangeLanguage}>
      <option value="es">Español</option>
      <option value="en">Inglés</option>
    </select>
  );
}

export default Languages;

