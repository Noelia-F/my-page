import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          projects: 'Projects',
          career: 'Career',
          knowledge: 'Knowledge',
          homeDescription: 'Web developer with some background in graphic design. I mainly program webpages with JavaScript and make webpages layouts with HTML and CSS.',
          workingProcess: 'We are working on it...',
          english: 'English',
          spanish: 'Spanish',
          korean: 'Korean',
          languagePreIntermediate: 'Pre-intermediate',
          languageUpperIntermediate: 'Upper-intermediate',
          languageNative: 'Native',
        }
      },
      es: {
        translation: {
          home: 'Home',
          projects: 'Proyectos',
          career: 'Trayectoria',
          knowledge: 'Conocimientos',
          homeDescription: 'Desarrolladora web de profesión con una breve experiencia en diseño. Me dedico principalmente a la programación y maquetación de páginas web.',
          workingProcess: 'Estamos trabajando en ello...',
          english: 'Inglés',
          spanish: 'Español',
          korean: 'Coreano',
          languagePreIntermediate: 'Pre-intermedio',
          languageUpperIntermediate: 'Intermedio-alto',
          languageNative: 'Nativo',
        }
      }
    }
  });

export default i18n;