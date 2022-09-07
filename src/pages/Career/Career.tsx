import React from 'react';
import './Career.css';
import {ReactComponent as Working} from '../../icons/working.svg';
import { useTranslation } from 'react-i18next';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';
import {ReactComponent as Briefcase} from "../../assets/icons/briefcase.svg";
import {ReactComponent as Book} from "../../assets/icons/book.svg";

const Career: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="App-section">
      <h2 className='App-title-section'>{t('career')}</h2>
      <div className='App-section__content'>
        {/* <WorkingProcess /> */}
        <ul className='App-timeline'>
          <li className='App-timeline__element'>
            <div>
              <span className='App-text App-timeline__date'>
                2018 - Actualmente
              </span>
            </div>
            <ul className='App-timeline__content'>
              <li className='App-timeline__content__item'>
                <div className='App-timeline__dot'>
                  <Briefcase />
                </div>
                <h3 className='App-subtitle'>Loycus</h3>
                <h4 className='App-subtitle'>FrontEnd Developer</h4>
                <div>
                  <p className='App-text'> Desarrollo web del site y de las diferentes aplicaciones internas de la empresa.</p>
                  {/* <ul className='App-tags'>
                    <li>
                      <span>
                        HTML
                      </span>
                    </li>
                    <li>
                      <span>
                        CSS(Sass)
                      </span>
                    </li>
                    <li>
                      <span>
                      Angular 8+
                      </span>
                    </li>
                    <li>
                      <span>
                      RxJS
                      </span>
                    </li>
                    <li>
                      <span>
                      Vue
                      </span>
                    </li>
                    <li>
                      <span>
                      React
                      </span>
                    </li>
                    <li>
                      <span>
                      Git
                      </span>
                    </li>
                  </ul> */}
                </div>
              </li>
              <li className='App-timeline__content__item'>
                <div className='App-timeline__dot'>
                  <Book />
                </div>
                <h3 className='App-subtitle'>Loycus</h3>
                <h4 className='App-subtitle'>FrontEnd Developer</h4>
                <div>
                  <p className='App-text'> Desarrollo web del site y de las diferentes aplicaciones internas de la empresa.</p>
                  {/* <ul className='App-tags'>
                    <li>
                      <span>
                        HTML
                      </span>
                    </li>
                    <li>
                      <span>
                        CSS(Sass)
                      </span>
                    </li>
                    <li>
                      <span>
                      Angular 8+
                      </span>
                    </li>
                    <li>
                      <span>
                      RxJS
                      </span>
                    </li>
                    <li>
                      <span>
                      Vue
                      </span>
                    </li>
                    <li>
                      <span>
                      React
                      </span>
                    </li>
                    <li>
                      <span>
                      Git
                      </span>
                    </li>
                  </ul> */}
                </div>
              </li>
            </ul>
          </li> 
        </ul>
      </div>
    </section>
  );
}

export default Career;
