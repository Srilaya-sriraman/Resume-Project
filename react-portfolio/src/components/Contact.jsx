import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../utils'

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
        <div className={styles.content}>
            <a href="#"><img src={getImageUrl("LinkedIn.png")} className={styles.img}></img></a>
            <a href="#"><img src={getImageUrl("Github.png")} className={styles.img}></img></a>
            <a href="#"><img src={getImageUrl("Mail.png")} className={styles.img}></img></a>
        </div>
        <p className={styles.desp}>Made with Love by Srilaya ❤️</p>
    </section>
  )
}

export default Contact
