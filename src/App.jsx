import { useState } from 'react'
import Navbar from './widget/Navbar.jsx'
import style from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div className={style.underback}>
        <div className={style.mainbox}>
          <div className={style.leftmain}>
            <div className={style.box1}>
              <div className={style.box1_content}>
                
              </div>
            </div>
          </div>
          <div className={style.rightmain}>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
