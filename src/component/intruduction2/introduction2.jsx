import React from 'react';
import styles from './introduction2.module.css'
import { data } from '../data/data';

const Introduction2 = () => {
  return(
    <div className={styles.introduction2}>
      <div className={styles.container}>
        <span className={styles.title}>{data.data1.title}</span>
        <span className={styles.content}>
          <span className={styles.content1}><span className={styles.content1_sub}>{data.data1.content1}</span></span><br />
          <span className={styles.content2}><span className={styles.content2_sub}>{data.data1.content2}</span></span><br />
          <span className={styles.content3}><span className={styles.content3_sub}>{data.data1.content3}</span></span><br />
          <span className={styles.content4}><span className={styles.content4_sub}>{data.data1.content4}</span></span><br />
          <span className={styles.content5}><span className={styles.content5_sub}>{data.data1.content5}</span></span>
        </span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{data.data2.title}</span>
        <span className={styles.content}>
          {data.data2.content1}<br />
          {data.data2.content2}
        </span>
      </div>
    </div>
  )
};

export default Introduction2;