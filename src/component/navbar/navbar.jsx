import React, { useState } from 'react';
import styles from './navbar.module.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({burger, moveTop, toggleBurger}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offCanvas = () => {
    return (
      <>
        <Offcanvas show={show} placement="top" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return(
    <div className={styles.navbar}>
      {offCanvas()}
      <div className={styles.logo} onClick={moveTop}>
        <span className={styles.icon}><i className="fas fa-parachute-box"></i></span>
        <span className={styles.title}>물플</span>
      </div>
      <div className={burger ? styles.menu_active : styles.menu}>
        <span className={styles.text}>물플소개</span>
        <span className={styles.text}>주요서비스</span>
        <span className={styles.text}>진행절차</span>
        <span className={styles.text}>물플장점</span>
      </div>
      <button className={styles.inquiry}>견적문의</button>
      <button className={styles.calling}>전화문의</button>
      <button className={styles.offcanvas} onClick={handleShow}><i className="fas fa-bars"></i></button>
      <span onClick={toggleBurger}>
        <span className={!burger ? styles.burger_active : styles.burger}><i className="fas fa-bars"></i></span>
        <span className={burger ? styles.times_active : styles.times}><i className="fas fa-times"></i></span>
      </span>
    </div>
  )
};

export default Navbar;