// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './scss/App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isNavOn: false};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.navClick = this.navClick.bind(this);


    this.t1Txt = ["{ Hello, World! }","{ 경험 }","{ 대표 포트폴리오 }","{ 문의 }"];
  }


  navClick(){
    this.setState(state => ({
      isNavOn: !state.isNavOn
    }));
  }

  render() {
    return (
      <>
      <div className="nav-box">
        <button type="button" className={this.state.isNavOn ? 'ac btn' : 'btn'} onClick={this.navClick}>
          <i className="i1"></i>
          <i className="i2"></i>
          <i className="i3"></i>
        </button>
        <div className={this.state.isNavOn ? 'ac bg' : 'bg'}>
          <nav>
            <ul>
              <li><a href="/#experience" onClick={this.navClick}>경험<span>Experience</span></a></li>
              <li><a href="/#portpolio" onClick={this.navClick}>포트폴리오<span>Portpolio</span></a></li>
              <li><a href="/#contact" onClick={this.navClick}>문의<span>Contact</span></a></li>
              <li><a href="">로그인<span>Login</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="main">
        <div className="txt-w">
            <div className="c">
                <p className="t1">{this.t1Txt[0]}</p>
                <h1>안녕하세요. 김진영입니다.</h1>
            </div>
        </div>
      </section>
      <section id="experience" className="experience">
        <div className="tit">
          <h2>{this.t1Txt[1]}</h2>
          <p>Experience</p>
        </div>
        <div className="lst">
          <ul>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">iOS</p>
              <p className="t2">하이브리드앱</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
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
                <img src="" alt=""/>
              </div>
              <p className="t1">Node.js</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
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
                <img src="" alt=""/>
              </div>
              <p className="t1">Github</p>
              <p className="t2">버전관리</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">React</p>
              <p className="t2">프론트엔드</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">SCSS</p>
              <p className="t2">스타일</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">HTML</p>
              <p className="t2">-</p>
            </li>
            <li>
              <div className="img">
                <img src="" alt=""/>
              </div>
              <p className="t1">JS</p>
              <p className="t2">-</p>
            </li>

          </ul>
        </div>
      </section>
      <section id="portpolio" className="portpolio">
        <div className="tit">
          <h2>{this.t1Txt[2]}</h2>
          <p>Portpolio</p>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="tit">
          <h2>{this.t1Txt[3]}</h2>
          <p>Portpolio</p>
        </div>
      </section>
      </>
    );
  }
}

export default App;
