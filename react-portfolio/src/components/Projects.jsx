import React from 'react'
import styles from './Projects.module.css'
import { getImageUrl } from '../utils'

const Projects = () => {
  return (
    <section className={styles.container} id="proj">
        <center><p className={styles.mainhead}>Projects</p></center>
        <div className={styles.projects}>
            <div className={styles.project}>
                <img src={getImageUrl("Tic-tac-toe.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Tic-Tac-Toe</p>
                <p className={styles.desp}>Interactive tic-tac-toe game built using HTMl, CSS and JavaScript</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("Srilaya's Porfolio.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>My portfolio page</p>
                <p className={styles.desp}>Responsive and adaptive page that showcases my Vite React js skills</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("FarmToFactory.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>FarmToFactory</p>
                <p className={styles.desp}>An solid user responsive and interactive design for an e-commerce website that lets farmers sell their waste products online.( Using Figma)</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("HumanoidX.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>HumanoidX</p>
                <p className={styles.desp}>Design for HumanoidX's official club website. Contains many interesting features and has been implemented. (Using Figma)</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("Bloggistar.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Bloggistar</p>
                <p className={styles.desp}>Design for an interactive and user friendly blogging website (Using Figma)</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("Bloggistar.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Bloggistar</p>
                <p className={styles.desp}>Design for an interactive and user friendly blogging website (Using Figma)</p>
                <a href="#" className={styles.btn}>To view</a>
            </div>
        </div>
        <p className={styles.justUpper}> .</p>
    </section>
  )
}

export default Projects
