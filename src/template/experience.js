import { DiApple } from 'react-icons/di';
import { DiAndroid } from 'react-icons/di';

import { DiNodejs } from 'react-icons/di';
import { DiPhp } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';

import { DiReact } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiJsBadge } from 'react-icons/di';

function Experience() {
    return (
        <div className="lst container">
          <ul>
            <li>
              <div className="img">
                <DiApple className="svg" />
              </div>
              <p className="t1">iOS</p>
              <p className="t2">하이브리드앱</p>
            </li>
            <li>
              <div className="img">
                <DiAndroid className="svg" />
              </div>
              <p className="t1">Android</p>
              <p className="t2">하이브리드앱</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">FCM</p>
              <p className="t2">알림</p>
            </li>
            <li>
              <div className="img">
                <DiNodejs className="svg sb" />
              </div>
              <p className="t1">Node.js</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <DiPhp className="svg sb" />
              </div>
              <p className="t1">PHP</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">MariaDB</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">카페24</p>
              <p className="t2">쇼핑몰템플릿 제작</p>
            </li>
            <li>
              <div className="img">
                <DiGithubBadge className="svg" />
              </div>
              <p className="t1">Github</p>
              <p className="t2">버전관리</p>
            </li>
            <li>
              <div className="img">
                <DiReact className="svg" />
              </div>
              <p className="t1">React</p>
              <p className="t2">프론트엔드</p>
            </li>
            <li>
              <div className="img">
                <DiSass className="svg" />
              </div>
              <p className="t1">SCSS</p>
              <p className="t2">스타일</p>
            </li>
            <li>
              <div className="img">
                <DiHtml5 className="svg" />
              </div>
              <p className="t1">HTML</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <DiJsBadge className="svg" />
              </div>
              <p className="t1">JS</p>
              <p className="t2">-</p>
            </li>
          </ul>
        </div>
    )
}
export default Experience;
