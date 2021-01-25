// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './scss/App.scss';
import React, { useState } from 'react';
import Portpolio from './template/portpolio';
import Experience from './template/experience';
import Contact from './template/contact';

function App() {
  let [nav, setNav] = useState(false);
  const t1Txt = ["{ Hello, World! }","{ 경험 }","{ 대표 포트폴리오 }","{ 문의 }"];
  /*
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
  */

    return (
      <>
      
      <div className="nav-box">
        <button type="button" className={nav ? 'ac btn' : 'btn'} onClick={() => setNav(!nav)}>
          <i className="i1"></i>
          <i className="i2"></i>
          <i className="i3"></i>
        </button>
        <div className={nav ? 'ac bg' : 'bg'}>
          <nav>
            <ul>
              <li><a href="/#experience" onClick={() => setNav(!nav)}>경험<span>Experience</span></a></li>
              <li><a href="/#portpolio"  onClick={() => setNav(!nav)}>포트폴리오<span>Portpolio</span></a></li>
              <li><a href="/#contact" onClick={() => setNav(!nav)}>문의<span>Contact</span></a></li>
              <li><a href="">로그인<span>Login</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="main">
        <div className="txt-w">
            <div className="c">
                <p className="t1">{t1Txt[0]}</p>
                <h1>안녕하세요. 김진영입니다.</h1>
            </div>
        </div>
      </section>
      <section id="experience" className="experience">
        <div className="tit">
          <h2>{t1Txt[1]}</h2>
          <p>Experience</p>
        </div>
        <Experience />
      </section>
      <section id="portpolio" className="portpolio">
        <div className="tit">
          <h2>{t1Txt[2]}</h2>
          <p>Portpolio</p>
        </div>
        <Portpolio />
      </section>
      <section id="contact" className="contact">
        <div className="tit">
          <h2>{t1Txt[3]}</h2>
          <p>Contact</p>
        </div>
        <Contact />
      </section>
      </>
    );
}

export default App;
