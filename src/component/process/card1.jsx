import React from 'react';
import styles from './process.module.css';
import { data } from '../data/data'

const Card1 = () => {
  return(
    <div className={styles.article}>
      {
        data.process1.map((data)=>{
          return(
            <div className={styles.arrow_box} key={data.id}>
              <span className={styles.card}>
                <span className={styles.icon1}><i className={data.icon}></i></span>
                <p>{data.title}</p>
              </span>
              <span className={styles.arrow}><i className={data.arrow}></i></span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card1;