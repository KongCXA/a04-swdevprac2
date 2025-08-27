import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css";

export default function TopMenu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <TopMenuItem href="/booking" label="Booking" />
        <img src="/img/logo.png" alt="Logo" width={40} height={40} />
      </nav>
    </header>
  );
}
