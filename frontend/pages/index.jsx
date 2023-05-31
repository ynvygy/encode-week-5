import styles from "../styles/Home.module.css";
import Lottery from "../components/Lottery";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Lottery></Lottery>
      </main>
    </div>
  );
}
