import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
  return(
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.img} src="/favicon.ico" alt="logo" />
        <span className={styles.title}>Mulplz</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.text}>물플소개</span>
        <span className={styles.text}>주요 서비스</span>
        <span className={styles.text}>진행절차</span>
        <span className={styles.text}>물플의 장점</span>
      </div>
      <button className={styles.button}>견적문의</button>
      <button className={styles.burger}>버거</button>
    </div>
  )
};

export default Navbar;