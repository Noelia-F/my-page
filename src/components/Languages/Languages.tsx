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
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </>
  );
}

export default Languages;
