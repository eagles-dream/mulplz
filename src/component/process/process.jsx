import React from 'react';
import styles from './process.module.css';
import Card1 from './card1';
import Card2 from './card2';

const Process = () => {
  
  return(
    <div className={styles.process}>
      <div className={styles.title}>진행절차</div>
      <div className={styles.container}>
        <Card1 />
        <Card2 />
      </div>
    </div>
  )
};

export default Process;