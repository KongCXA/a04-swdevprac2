import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css";

export default function TopMenu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <TopMenuItem href="/booking" label="Booking" />
        <TopMenuItem href="/" label="" iconSrc="/img/logo.png" />
      </nav>
    </header>
  );
}
