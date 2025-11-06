import { useState } from 'react';
import style from './Main.module.css';

function Main() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={style.underback}>
        <div className={style.mainbox}>
          <div className={style.leftmain}>
            <div className={style.box1}>
              <div className={style.box1_box}>
                <div className={style.title}>
                  2025 - 11 - 6
                </div>
                <div className={style.content}>
                  우리들의 전공동아리!<br/>
                  paletto의 프론트엔드!!
                </div>
              </div>
              <img src="ChatGPT Image 2025년 11월 6일 오후 02_05_34.png" className={style.box1_img} />
            </div>
          </div>
          <div className={style.rightmain}>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main

