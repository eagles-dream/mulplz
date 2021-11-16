import React from 'react';
import styles from './service.module.css'
import { data } from '../data/data';

const Service = () => {
  return(
    <div className={styles.service}>
      <div className={styles.title}>주요서비스</div>
      <div className={styles.content}>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon1}></i></span>
          <h6>{data.title.title1}</h6>
          <p>{data.text.text1}</p>
        </span>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon2}></i></span>
          <h6>{data.title.title2}</h6>
          <p>{data.text.text2}</p>
        </span>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon3}></i></span>
          <h6>{data.title.title3}</h6>
          <p>{data.text.text3}</p>
        </span>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon4}></i></span>
          <h6>{data.title.title4}</h6>
          <p>{data.text.text4}</p>
        </span>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon5}></i></span>
          <h6>{data.title.title5}</h6>
          <p>{data.text.text5}</p>
        </span>
        <span className={styles.card}>
          <span className={styles.icon}><i className={data.icon.icon6}></i></span>
          <h6>{data.title.title6}</h6>
          <p>{data.text.text6}</p>
        </span>
      </div>
    </div>
  )
};

export default Service;