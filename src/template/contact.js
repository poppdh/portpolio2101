function Contact() {
    return (
      <div className="container">
      <form action="">
        <div className="line">
          <input type="text" className="inp" name="name" placeholder="이름" />
        </div>
        <div className="line">
          <input type="text" className="inp" name="tel" placeholder="연락처" />
        </div>
        <div className="line">
          <textarea name="cont" className="inp" placeholder="내용"></textarea>
        </div>
        <div className="line">
          <button type="submit" className="sbm_btn">확인</button>
        </div>
      </form>
    </div>
    )
}
export default Contact;
