import React, { useState } from 'react';
import styles from './navbar.module.css'
import '@fortawesome/fontawesome-free/js/all.js'

const Navbar = () => {
  const [burger, setBurger] = useState(false)
  const toggle = () => {
    return(setBurger(!burger))
  }
  return(
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.icon}><i className="fas fa-parachute-box"></i></span>
        <span className={styles.title}>물플</span>
      </div>
      <div className={burger ? styles.menu_active : styles.menu}>
        <span className={styles.text}>물플소개</span>
        <span className={styles.text}>주요서비스</span>
        <span className={styles.text}>진행절차</span>
        <span className={styles.text}>물플장점</span>
      </div>
      <button className={styles.inquiry}>견적문의</button>
      <button className={styles.calling}>전화문의</button>
      <span className={styles.burger} onClick={toggle}><i className="fas fa-bars"></i></span>
    </div>
  )
};

export default Navbar;