import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

function AlertCommonent(props) {
  console.log(props);
  return (
  <div className="alert_md">
    <div className="md_wrap">
      <div className="cont">
        <i>
          {props.ico === true ? <AiOutlineCheck className="af" /> : <AiOutlineClose className="af" />}
        </i>
        <p className="alert_txt">{props.message}<button type="button" className="md_close" onClick={props.onClose}>닫기</button></p>
      </div>
    </div>
  </div>
  )
}
export default AlertCommonent;
