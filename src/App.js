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


    this.t1Txt = "{ Hello, World! }";
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
          <div className={this.state.isNavOn ? 'ac bg' : 'bg'}></div>
      </div>
       <section className="main">
          <div className="txt-w">
              <div className="c">
                  <p className="t1">{this.t1Txt}</p>
                  <h1>안녕하세요. 김진영입니다.</h1>
              </div>
          </div>
       </section>
      </>
    );
  }
}

export default App;
