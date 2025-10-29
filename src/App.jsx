import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={style.top}>
        <div className={style.header1}>
          <p className={style.headt}>배민셀프서비스</p>
          <p className={style.bar}>|</p>
          <p className={style.headt}>배민상회</p>
          <p className={style.bar}>|</p>
          <p className={style.headt}>배민아카데미</p>
        </div>
        <div className={style.header2}>
          <p className={style.headt}>공지사항</p>
          <p className={style.bar}>|</p>
          <p className={style.headt}>고객센터</p>
          <p className={style.bar}>|</p>
          <p className={style.headt}>로그인</p>
          <p className={style.bar}>|</p>
          <p className={style.headt}>회원가입</p>
        </div>
      </div>
      <div className={style.middletop}>
        <p className={style.logo}>배민외식업광장🍚</p>
        <p className={style.menu}>배민 입점-운영</p>
        <p className={style.menu}>외식업 정보</p>
        <p className={style.menu}>가게 운영 지원</p>
        <p className={style.menu}>혜택-이벤트</p>
        <div className={style.searchbar}>
          <input type='text' className={style.search} placeholder='실제 데이터로 가게 운영 힌트 받으세요' />
          <span className={style.searchicon}>🔍</span>
        </div>
      </div>
      <div className={style.underback}>
        
      </div>
    </>
  )
}

export default App
