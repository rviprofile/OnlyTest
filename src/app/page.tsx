import styles from "./page.module.css";
import { HistoricalDatesSection } from "../components/HistoricalВatesSection/HistoricalDatesSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HistoricalDatesSection />
      </main>
    </div>
  );
}
