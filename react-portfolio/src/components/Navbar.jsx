import React,{useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../utils.js"

export const Navbar = () => {
    const [menuOpen, setMenuOpen]=useState(false);
    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
        <img className={`${styles.menuBtn} ${menuOpen && styles.menuOpenp}`} src={ getImageUrl("hamburg.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}></img>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li> <a href="#about">About</a></li>
                <li> <a href="#experience">Skill set</a></li>
                <li> <a href="#proj">Project</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}