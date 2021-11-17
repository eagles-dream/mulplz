import React from 'react';
import styles from './strength.module.css'
import { data } from '../data/data';

const Strength = () => {
  return(
    <div className={styles.strength}>
      <div className={styles.title}>물플장점</div>
      <div className={styles.article}>
        <span className={styles.card}>
          <img className={styles.img} src="./img/business.jpg" alt="배경" />
          <h6>{data.strength1.title1}</h6>
          <p>{data.strength2.text1}</p>
        </span>
        <span className={styles.card}>
          <img className={styles.img} src="./img/personal.jpg" alt="배경" />
          <h6>{data.strength1.title2}</h6>
          <p>{data.strength2.text2}</p>
        </span>
        <span className={styles.card}>
          <img className={styles.img} src="./img/warehouse.jpg" alt="배경" />
          <h6>{data.strength1.title3}</h6>
          <p>{data.strength2.text3}</p>
        </span>
      </div>
    </div>
  )
};

export default Strength;