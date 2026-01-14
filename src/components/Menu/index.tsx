import styles from "./styles.module.css";

export function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="#" className={styles.menuLink}>
            MythBeer
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuLink}>
            Panteão
          </a>
        </li>
      </ul>
    </div>
  );
}
