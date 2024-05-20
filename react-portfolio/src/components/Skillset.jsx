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
        <p>Vellore Institute of Technology,Chennai</p>
        <p className={styles.year}>2008-2022</p>
        <p>Alpha School CBSE, Chennai</p>
      </div>
      <div className={styles.separate}>
      <p className={styles.maintitle}>SKILLS</p>
      <div className={styles.arrange}>
        <div>
        <p className={styles.head}>Front End</p>
        <p>HTML,CSS,React Js</p>
        </div>
        <div>
          <img src={getImageUrl("Html_CSS.png")} alt="HTML_CSS" className="skillset-img1" width="100px"></img>
          <img src={getImageUrl("JS.png")} alt="Javascript" className="skillset-img2" width="90px"></img>
          <img src="react.svg.png" alt="React" className="skillset-img3" width="80px"></img>
          <img src="Typescript.svg.png" alt="Typescript" className="skillset-img4" width="60px"></img>
          </div>
        </div>
          <div>
            <p className={styles.head}>Languages</p>
            <p>C, CPP, Java, Python</p>
          </div>
          <div>
            <p className={styles.head}>Designing applications</p>
            <p>Figma, Canva, Picsart</p>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Skillset
