import React from 'react';
import styles from './navbar.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({show, handleShow, handleClose, moveTop, moveTabRef1, moveTabRef2, moveTabRef3, moveTabRef4}) => {
  

  const offCanvas = () => {
    return (
      <Offcanvas className={styles.offcanvas} show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>물플</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <span className={styles.offcanvas_text} onClick={moveTabRef1}>물플소개</span>
          <span className={styles.offcanvas_text} onClick={moveTabRef2}>주요서비스</span>
          <span className={styles.offcanvas_text} onClick={moveTabRef3}>진행절차</span>
          <span className={styles.offcanvas_text} onClick={moveTabRef4}>물플장점</span>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return(
    <div className={styles.navbar}>
      {offCanvas()}
      <div className={styles.logo} onClick={moveTop}>
        <span className={styles.icon}><i className="fas fa-parachute-box"></i></span>
        <span className={styles.title}>물플</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.text} onClick={moveTabRef1}>물플소개</span>
        <span className={styles.text} onClick={moveTabRef2}>주요서비스</span>
        <span className={styles.text} onClick={moveTabRef3}>진행절차</span>
        <span className={styles.text} onClick={moveTabRef4}>물플장점</span>
      </div>
      <button className={styles.inquiry}>견적문의</button>
      <button className={styles.calling}>전화문의</button>
      <span className={styles.burger} onClick={handleShow}><i className="fas fa-bars"></i></span>
    </div>
  )
};

export default Navbar;