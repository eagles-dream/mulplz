import React from 'react';
import styles from './process.module.css';
import { data } from '../data/data'

const Process = () => {
  return(
    <div className={styles.process}>
      <div className={styles.title}>진행절차</div>
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon1}><i className={data.process1.icon1}></i></span>
              <p>{data.process1.title1}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon1}><i className={data.process1.icon2}></i></span>
              <p>{data.process1.title2}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon1}><i className={data.process1.icon3}></i></span>
              <p>{data.process1.title3}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon1}><i className={data.process1.icon4}></i></span>
              <p>{data.process1.title4}</p>
            </span>
            <span className={styles.arrow1}><i className="fas fa-angle-double-right"></i></span>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon2}><i className={data.process2.icon1}></i></span>
              <p>{data.process2.title1}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon2}><i className={data.process2.icon2}></i></span>
              <p>{data.process2.title2}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon2}><i className={data.process2.icon3}></i></span>
              <p>{data.process2.title3}</p>
            </span>
            <span className={styles.arrow}><i className="fas fa-angle-double-right"></i></span>
          </div>
          <div className={styles.arrow_box}>
            <span className={styles.card}>
              <span className={styles.icon2}><i className={data.process2.icon4}></i></span>
              <p>{data.process2.title4}</p>
            </span>
            <span className={styles.arrow1}><i className="fas fa-angle-double-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Process;