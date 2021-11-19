import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import Introduction from './component/intruduction/introduction';
import Navbar from './component/navbar/navbar';
import Process from './component/process/process';
import Service from './component/service/service';
import Strength from './component/strength/strength';

function App() {
  const [burger, setBurger] = useState(false)
  const toggleBurger = () => {
    return(setBurger(!burger))
  }
  
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

  const moveTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <div className={styles.app}>
      <Navbar burger={burger} toggleBurger={toggleBurger} moveTop={moveTop} />
      <Introduction moveTop={moveTop} visible={visible} />
      <Service />
      <Process />
      <Strength />
      <Footer />
    </div>
  );
}

export default App;
