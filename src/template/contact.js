function Contact(props) {
  return (
    <div className="container">
      <form onSubmit={(e) => props.submitFs(e)}>
        <div className="line">
          <input type="text" className="inp" name="name" value={props.sname} placeholder="이름" onChange={({target : {value}}) => props.setNameF(value)} />
        </div>
        <div className="line">
          <input type="text" className="inp" name="tel" value={props.stel} placeholder="연락처" onChange={({target : {value}}) => props.setTelF(value)} />
        </div>
        <div className="line">
          <textarea name="cont" className="inp" value={props.scont} placeholder="내용" onChange={({target : {value}}) => props.setContF(value)}></textarea>
        </div>
        <div className="line">
          <button type="submit" className="sbm_btn">확인</button>
        </div>
      </form>
  </div>
  )
}
export default Contact;
