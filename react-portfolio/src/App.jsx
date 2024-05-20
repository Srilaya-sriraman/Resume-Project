import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import About from './components/About'
import Skillset from './components/Skillset'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Navbar/>
      <Intro/>
      <About/>
      <Skillset/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
