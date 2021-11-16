import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return(
    <div className={styles.footer}>
      <span className={styles.title}>주식회사 물플</span>
      <span className={styles.adress}>서울시 금천구 벚꽃로 286 5층 507-244호 (삼성리더스 타워)</span>
      <span className={styles.adress}>Email : badayahoo1@gmail.com</span>
      <span className={styles.adress}>전화 : 02-6671-9027 (월~금 09:00 ~ 18:00)</span>
      <span className={styles.copyright}>© Copyright (주)물플</span>
    </div>
  )
};

export default Footer;