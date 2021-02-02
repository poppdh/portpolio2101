import { BsDisplay } from "react-icons/bs";
import { BsTablet } from "react-icons/bs";
import { BsAspectRatio } from "react-icons/bs";

function Portpolio() {
    return (
        <div className="lst container">
            <ul>
            <li>
                <a href="http://www.daesungenergy.com/" target="_blank"rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">대성에너지</p>
                <p className="t2">http://www.daesungenergy.com/</p>
                <BsAspectRatio className="type" />
                </a>
            </li>
            <li>
                <a href="https://www.yeulmaru.org/" target="_blank"rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">예울마루</p>
                <p className="t2">https://www.yeulmaru.org/</p>
                <BsAspectRatio className="type" />
                </a>
            </li>
            <li>
                <a href="https://www.nicepharma.com/" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">고려제약</p>
                <p className="t2">https://www.nicepharma.com/</p>
                <BsDisplay className="type" />
                <BsTablet className="type" />
                </a>
            </li>
            <li>
                <a href="https://www.inday.co.kr/" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">인데이</p>
                <p className="t2">https://www.inday.co.kr/</p>
                <BsDisplay className="type" />
                <BsTablet className="type" />
                </a>
            </li>

            <li>
                <a href="http://www.cellid.co.kr/" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">셀리드</p>
                <p className="t2">http://www.cellid.co.kr/</p>
                <BsAspectRatio className="type" />
                </a>
            </li>
            <li>
                <a href="http://o2auction.com/" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">오투옥션</p>
                <p className="t2">http://o2auction.com/</p>
                <BsAspectRatio className="type" />
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">신선설농탕</p>
                <p className="t2"></p>
                <BsAspectRatio className="type" />
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <p className="t1">피자마루</p>
                <p className="t2"></p>
                <BsDisplay className="type" />
                <BsTablet className="type" />
                </a>
            </li>
            </ul>
        </div>
    )
}
export default Portpolio;
