import React, {useState} from 'react';
import './Timeline.css';
import { useTranslation } from 'react-i18next';
import {ReactComponent as Briefcase} from "../../assets/icons/briefcase.svg";
import {ReactComponent as Book} from "../../assets/icons/book.svg";
import Tag from '../Tag/Tag';

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
  let [elementSelected, setSelection] = useState('timelineId0-0');
  const onSelect = (id: string) => {
    return setSelection(elementSelected = id);
  }

  const renderListOfTags = (tags: string[]) => {
    return tags.map((tag) => (<li><Tag label={tag} color='secondary' /></li>))
  }
  const renderListOfTimelineContent = (timelineContent: TimelineContent[], parentId: string) => {
    return timelineContent.map((content, index) => {
      const id = `${parentId}-${index}`;
      return (
        <li onClick={() => onSelect(id)} className={`App-timeline__content__item ${id === elementSelected ? 'selected' : ''}`} key={`timelineIdContent${index}`}>
          <div className='App-timeline__dot'>
            <Briefcase />
          </div>
          <h3 className='App-subtitle'>{content.title}</h3>
          <h4 className='App-text'>{t(content.subtitle)}</h4>
          <div className='App-timeline__content__description'>
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
    return timelineList.map((element, index) => {
      const id = `timelineId${index}`;
      return (
        <li className='App-timeline__element' key={id}>
          <div>
            <span className='App-text App-timeline__date'>
            {t(element.label)}
            </span>
          </div>
          <ul className='App-timeline__content'>
            {renderListOfTimelineContent(element.content, id)}
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
