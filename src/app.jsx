import styles from './app.module.css';
import Introduction from './component/intruduction/introduction';
import Introduction2 from './component/intruduction2/introduction2';
import Navbar from './component/navbar/navbar';
import Process from './component/process/process';
import Service from './component/service/service';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Introduction />
      <Introduction2 />
      <Service />
      <Process />
    </div>
  );
}

export default App;
