import React from 'react'
import { getImageUrl } from '../utils'
import styles from './Skillset.module.css'

const Skillset = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
      <div className={styles.separate}>
        <p className={styles.maintitle}>EDUCATION</p>
        <p className={styles.year}>2022-present</p>
        <p>B.Tech CSE (2nd year completed)</p>
        <p className={styles.desp}>Vellore Institute of Technology,Chennai</p>
        <p className={styles.year}>2008-2022</p>
        <p className={styles.desp}>Alpha School CBSE, Chennai</p>
      </div>
      <img src={getImageUrl("studying.png")} className={styles.studying}></img>
      <div className={styles.separate}>
      <p className={styles.maintitle}>SKILLS</p>
      <div>
        <div>
        <p className={styles.head}>Front End</p>
        <p className={styles.desp}>HTML,CSS,React Js</p>
        </div>
       </div> 
          <div>
            <p className={styles.head}>Languages</p>
            <p className={styles.desp}>C, CPP, Java, Python</p>
          </div>
          <div>
            <p className={styles.head}>Designing applications</p>
            <p className={styles.desp}>Figma, Canva, Picsart</p>
          </div>
          </div>
      </div>
      <p className={styles.justUpper}> .</p>
        
    </section>
  )
}

export default Skillset
