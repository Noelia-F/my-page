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
        description: 'careerLoycusDescription',
        tags: ['HTML', 'CSS(Sass)', 'Angular 8+', 'Rxjs', 'Vue', 'React', 'Git']
      },
      {
        type: 'education',
        title: 'AEPI',
        subtitle: 'careerAepiSubtitle',
        description: 'careerAepiDescription',
        tags: ['Mongo', 'Express', 'NodeJS', 'Angular']
      },
      {
        type: 'work',
        title: 'iAhorro',
        subtitle: 'Front-End Developer (2018)',
        description: 'careeriAhorroDescription',
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
        subtitle: 'Front-End developer',
        description: 'careerAdalabDescription',
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
        subtitle: 'careerNetsalesTitle',
        description: 'careerNetsalesDescription',
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
        subtitle: 'careerGenerationTitle',
        description: 'careerGenerationDescription',
        tags: ['Analytics', 'HTML', 'Google Ads']
      },
      {
        type: 'education',
        title: 'CICE',
        subtitle: 'careerCiceTitle',
        description: 'careerCiceDescription',
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
        subtitle: 'careerUniversityTitle',
        description: 'careerUniversityDescription',
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
