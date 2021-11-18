import React from 'react';
import styles from './introduction.module.css'
import Introduction2 from './introduction2';

const Introduction = () => {
  return(
    <>
    <div className={styles.introduction}>
      <div className={styles.left}>
        <span className={styles.text1}>믿을수 있고 쉽고 편한,<br />종합물류대행 서비스</span>
        <span className={styles.text2}>스타트업에서 대기업까지<br />상온뿐아니라 냉장/냉동까지<br />물플만 있으면 충분합니다.</span>
      </div>
      <div className={styles.right}>
        <span className={styles.img}><i className="fas fa-people-carry"></i></span>
      </div>
    </div>
    <Introduction2 />
    </>
  )
};

export default Introduction;