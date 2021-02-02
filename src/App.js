// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './scss/App.scss';
import React, { useState } from 'react';
import axios from "axios";

import Portpolio from './template/portpolio';
import Experience from './template/experience';
import Contact from './template/contact';
import AlertCommonent from './template/alertcommonent';



function App() {
  const [nav, setNav] = useState(false);
  const t1Txt = ["{ Hello, World! }","{ 경험 }","{ 대표 포트폴리오 }","{ 문의 }"];

  // alert
  const [alert, setAlert] = useState(false);
  const [alertIco, setAlertIco] = useState(false);

  // form
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [cont, setCont] = useState('');
  const [msgTxt, setMsg] = useState('a');

  // alert
  function msgClose(){
    setAlert(false);
  }
  function msgOpen(msg, s){
    setMsg(msg);
    setAlert(true);
    setAlertIco(s);
    console.log(alertIco);
  }


  const submitF = e => {
    e.preventDefault();
    console.log(e);

    const reqArr = [name, tel, cont];
    const reqAlertArr = ["이름을", "연락처를", "내용을"];
    for(let key in reqArr){
      
      if(reqArr[key] === ''){
        const word = reqAlertArr[key]+' 입력해 주세요.';
        msgOpen(word, false);
        return false;
      }else{
      }
    }
    

    axios.post('http://poppdh11.cafe24.com/pt2101/contact.php', {
      name: name,
      tel: tel,
      cont: cont
    })
    .then(function (response) {
      console.log(response)
      if(response.data.s === 0){
        msgOpen('하루에 4개 이상 등록은 불가능합니다.', false);
      }else if(response.data.s === 1){
        msgOpen('등록이 완료되었습니다.', true);
      }else{
        msgOpen('등록 실패', false);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  



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
            <li><a href="/pt2101/#experience" onClick={() => setNav(!nav)}>경험<span>Experience</span></a></li>
            <li><a href="/pt2101/#portpolio" onClick={() => setNav(!nav)}>포트폴리오<span>Portpolio</span></a></li>
            <li><a href="/pt2101/#contact" onClick={() => setNav(!nav)}>문의<span>Contact</span></a></li>
            <li><a href="/pt2101/login.php">로그인<span>Login</span></a></li>
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
      <Contact sname={name} stel={tel} scont={cont} setNameF={setName} setTelF={setTel} setContF={setCont} submitFs={submitF} />
    </section>
    {alert === true ? <AlertCommonent message={msgTxt} onClose={msgClose} ico={alertIco} /> : ''}
    </>
  );
}

export default App;
