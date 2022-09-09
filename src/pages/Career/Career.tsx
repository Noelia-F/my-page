import React from 'react';
import './Career.css';
import { useTranslation } from 'react-i18next';
import TimeLine, { TimelineData } from '../../components/Timeline/Timeline';

const CAREER_TIMELINE: TimelineData[] = [
  {
    label: '2018-actualmente',
    content: [
      {
        type: 'work',
        title: 'Loycus',
        subtitle: 'Front-End Developer',
        description: 'Desarrollo web del site y de las diferentes aplicaciones internas de la empresa.',
        tags: ['HTML', 'CSS(Sass)', 'Angular 8+', 'Rxjs', 'Vue', 'React', 'Git']
      },
      {
        type: 'education',
        title: 'AEPI',
        subtitle: 'Curso MEAN (2018)',
        description: 'Curso enfocado en el aprendizaje de la base de datos de Mongo, Express, Angular y NodeJS',
        tags: ['Mongo', 'Express', 'NodeJS', 'Angular']
      },
      {
        type: 'work',
        title: 'iAhorro',
        subtitle: 'Front-End Developer (2018)',
        description: 'Refactorización y desarrollo web del site y diseño y rediseño del site',
        tags: ['HTML', 'CSS(Sass)', 'Bootstrap', 'Javascript', 'Git', 'Photoshop']
      },
    ],
  },
  {
    label: '2017-2018',
    content: [
      {
        type: 'education',
        title: 'Adalab',
        subtitle: 'Curso Front-End developer',
        description: 'Curso enfocado en el aprendizaje del desarrollo Front-End',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Bustrap', 'Git', 'Atom', 'Gulp', 'Terminal(UNIX)', 'Metodologías ágiles']
      },
    ],
  },
  {
    label: '2016-2017',
    content: [
      {
        type: 'work',
        title: 'Netsales',
        subtitle: 'Diseñadora gráfica',
        description: 'Diseño de elementos para la web con photoshop y maquetación con HTML y CSS',
        tags: ['HTML', 'CSS', 'Photoshop', 'Illustrator']
      },
    ],
  },
  {
    label: '2015-2016',
    content: [
      {
        type: 'education',
        title: 'Generation Spain',
        subtitle: 'Formación en Marketing Digital (2016)',
        description: 'Formación para adquirir conocimientos relacionados con el marketing digital',
        tags: ['Analytics', 'HTML', 'Google Ads']
      },
      {
        type: 'education',
        title: 'CICE',
        subtitle: 'Máster en Fotografía y Postproducción digital',
        description: 'Máster enfocado en el aprendizaje de la fotografía y la postproducción digital',
        tags: ['Photoshop', 'LIghtroom']
      },
    ],
  },
  {
    label: '2010-2015',
    content: [
      {
        type: 'education',
        title: 'Univ.Rey Juan Carlos',
        subtitle: 'Grado en Comunicación Audiovisual',
        description: 'Grado universitario en Comunicación Audiovisual para el aprendizaje de la producción, dirección, guionización y elaboración de contenido audiovisual como cine y series',
        tags: ['Cine', 'HTML', 'Televisión', 'Guión', 'Producción audiovisual', 'Videojuegos', 'Narrativa']
      },
    ],
  },
];

const Career: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section" id='page-career'>
      <h2 className='App-title-section'>{t('career')}</h2>
      <div className='App-section__content'>
        <TimeLine timelineList={CAREER_TIMELINE} />
      </div>
    </section>
  );
}

export default Career;
