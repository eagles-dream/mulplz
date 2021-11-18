import React from 'react';
import styles from './process.module.css';
import { data } from '../data/data'

const Card2 = () => {
  return(
    <div className={styles.article}>
      {
        data.process2.map((data)=>{
          return(
            <div className={styles.arrow_box} key={data.id}>
              <span className={styles.card}>
                <span className={styles.icon2}><i className={data.icon}></i></span>
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

export default Card2;