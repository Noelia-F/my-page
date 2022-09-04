import React from 'react';
import i18n from '../../i18n';
import './Languages.css';

const lngs: any = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
};

const Languages: React.FunctionComponent = () => {
  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <button key={lng} className={`App-languages ${i18n.resolvedLanguage === lng ? 'selected' : ''}`} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </>
  );
}

export default Languages;
