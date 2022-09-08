import React from 'react';
import './Timeline.css';
import { useTranslation } from 'react-i18next';
import {ReactComponent as Briefcase} from "../../assets/icons/briefcase.svg";
import {ReactComponent as Book} from "../../assets/icons/book.svg";

export interface TimelineContent {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface TimelineData {
  label: string;
  content: TimelineContent[];
}

interface Props {
  timelineList: TimelineData[];
}

const TimeLine: React.FunctionComponent<Props> = ({timelineList}) => {
  const { t } = useTranslation();

  const renderListOfTags = (tags: string[]) => {
    return tags.map((tag) => (<li><span>{tag}</span></li>))
  }

  const renderListOfTimelineContent = (timelineContent: TimelineContent[]) => {
    return timelineContent.map((content) => {
      return (
        <li className='App-timeline__content__item'>
          <div className='App-timeline__dot'>
            <Briefcase />
          </div>
          <h3 className='App-subtitle'>{content.title}</h3>
          <h4 className='App-text'>{t(content.subtitle)}</h4>
          <div>
            <p className='App-text'>{t(content.description)}</p>
            <ul className='App-timeline__tags'>
              {renderListOfTags(content.tags)}
            </ul>
          </div>
        </li>
      )
    })
  }

  const renderListOfTimelineElements = (timelineList: TimelineData[]) => {
    return timelineList.map(element => {
      return (
        <li className='App-timeline__element'>
          <div>
            <span className='App-text App-timeline__date'>
            {t(element.label)}
            </span>
          </div>
          <ul className='App-timeline__content'>
            {renderListOfTimelineContent(element.content)}
          </ul>
        </li>
      );
    });
  }
  return (
    <ul className='App-timeline'>
      {renderListOfTimelineElements(timelineList)} 
    </ul>
  );
}

export default TimeLine;
