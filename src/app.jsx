import styles from './app.module.css';
import Navbar from './component/navbar/navbar';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
}

export default App;
