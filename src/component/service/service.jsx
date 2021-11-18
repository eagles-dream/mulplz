import React from 'react';
import styles from './service.module.css'
import { data } from '../data/data';

const Service = () => {
  return(
    <div className={styles.service}>
      <div className={styles.title}>주요서비스</div>
      <div className={styles.content}>
        {
          data.service.map((data)=>{
            return(
              <span className={styles.card} key={data.id}>
                <span className={styles.icon}><i className={data.icon}></i></span>
                <h6>{data.title}</h6>
                <p>{data.text}</p>
              </span>
            )
          })
        }
      </div>
    </div>
  )
};

export default Service;