import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Intro.module.css"
export const Intro = () =>
{
    return (<section className={styles.container}>
        <div className={styles.content}><p className={styles.title}> Hey! I am Srilaya</p>
        <p className={styles.description}>Front-end developing and designing enthusiast with 1+ year experience in learning in Figma, React,
            HTML,and CSS. </p>
        <p className={styles.description}>Passionate about creating stunning, user-friendly interfaces.</p>
        <a href ="mailto:srilayasriraman@gmail.com" className={styles.contactBtn}>Contact Me</a>
        <p className={styles.justupper}>.</p>
        </div>
        <img src={getImageUrl("MainPageLogo.png")} alt="Intro-Image" className={styles.IntroImg}></img>
    </section>
    )
}