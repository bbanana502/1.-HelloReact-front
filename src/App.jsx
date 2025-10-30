import { useState } from 'react'
import Navbar from './widget/Navbar.jsx'
import style from './widget/Navbar.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div className={style.underback}>
              
      </div>
    </>
  )
}

export default App
