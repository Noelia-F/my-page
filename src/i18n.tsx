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
          careerLoycusDescription: 'Website development and company web tools development.',
          careerAepiSubtitle: 'MEAN course (2018)',
          careerAepiDescription: 'Learning how to use Mongo, Express, Angular and NodeJs.',
          careeriAhorroDescription: 'Refactoring and website creation. Moreover, website deisgn and redesign.',
          careerAdalabDescription: 'Learning how to be a Front-End developer.',
          careerNetsalesDescription: 'Webpage layout with HTML and CSS (self-training) and graphic design.',
          careerNetsalesTitle: 'Graphic Designer',
          careerGenerationTitle: 'Course Digital Marketing (2016)',
          careerGenerationDescription: 'Learning tools to become a Digital Marketing professional.',
          careerCiceTitle: 'Master in Photography and Digital Postproduction',
          careerCiceDescription: 'Learning photography and digital postproduction.',
          careerUniversityTitle: 'Audiovisual Communication Degree',
          careerUniversityDescription: 'Learning production, direction, scriptwriting and preparation of audiovisual content such as movies and series.',
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
          careerLoycusDescription: 'Desarrollo web del site y de las diferentes aplicaciones internas de la empresa.',
          careerAepiSubtitle: 'Curso MEAN',
          careerAepiDescription: 'Curso enfocado en el aprendizaje de la base de datos de Mongo, Express, Angular y NodeJS',
          careeriAhorroDescription: 'Refactorización y desarrollo web del site y diseño y rediseño del site.',
          careerAdalabDescription: 'Curso enfocado en el aprendizaje del desarrollo Front-End.',
          careerNetsalesDescription: 'Maquetación con HTML y CSS (auto-formación) y diseño de elementos para la web con photoshop.',
          careerNetsalesTitle: 'Diseñadora Gráfica',
          careerGenerationTitle: 'Formación en Marketing Digital (2016)',
          careerGenerationDescription: 'Learning tools to become a Digital Marketing professional.',
          careerCiceTitle: 'Máster en Fotografía y Postproducción digital',
          careerCiceDescription: 'Máster enfocado en el aprendizaje de la fotografía y la postproducción digital.',
          careerUniversityTitle: 'Grado universitario en Comunicación Audiovisual',
          careerUniversityDescription: 'aprendizaje de la producción, dirección, guionización y elaboración de contenido audiovisual como cine y series.',

        }
      }
    }
  });

export default i18n;