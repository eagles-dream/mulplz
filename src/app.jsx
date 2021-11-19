import { useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import Introduction from './component/intruduction/introduction';
import Navbar from './component/navbar/navbar';
import Process from './component/process/process';
import Service from './component/service/service';
import Strength from './component/strength/strength';

function App() {
  const [visible, setVisible] = useState(false)  
  useEffect(()=>{
    const toggleVisible = () => {
      if(window.scrollY > 500) {
        setVisible(true)
      } else { 
        setVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisible)
  },[])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const tabRef1 = useRef()
  const tabRef2 = useRef()
  const tabRef3 = useRef()
  const tabRef4 = useRef()

  const moveTabRef1 = () => {
    tabRef1.current.scrollIntoView({behavior:"smooth"})
    setShow(false)
  }
  const moveTabRef2 = () => {
    tabRef2.current.scrollIntoView({behavior:"smooth"})
    setShow(false)
  }
  const moveTabRef3 = () => {
    tabRef3.current.scrollIntoView({behavior:"smooth"})
    setShow(false)
  }
  const moveTabRef4 = () => {
    tabRef4.current.scrollIntoView({behavior:"smooth"})
    setShow(false)
  }

  const moveTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <div className={styles.app}>
      <Navbar moveTop={moveTop} 
        moveTabRef1={moveTabRef1}
        moveTabRef2={moveTabRef2}
        moveTabRef3={moveTabRef3}
        moveTabRef4={moveTabRef4}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
         />
      <Introduction tabRef1={tabRef1} moveTop={moveTop} visible={visible} />
      <Service tabRef2={tabRef2} />
      <Process tabRef3={tabRef3} />
      <Strength tabRef4={tabRef4} />
      <Footer />
    </div>
  );
}

export default App;
