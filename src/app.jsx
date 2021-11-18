import styles from './app.module.css';
import Footer from './component/footer/footer';
import Introduction from './component/intruduction/introduction';
import Navbar from './component/navbar/navbar';
import Process from './component/process/process';
import Service from './component/service/service';
import Strength from './component/strength/strength';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Introduction />
      <Service />
      <Process />
      <Strength />
      <Footer />
    </div>
  );
}

export default App;
