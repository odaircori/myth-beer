import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.brand} href="#inicio">
        MythBeer
      </a>
      <ul className={styles.menuList}>
        <li>
          <a href="#degustacao" className={styles.menuLink}>
            Degustação
          </a>
        </li>
        <li>
          <a href="#colecao" className={styles.menuLink}>
            Coleção
          </a>
        </li>
        <li>
          <a href="#contato" className={styles.menuLink}>
            Contato
          </a>
        </li>
      </ul>
      <a className={styles.cta} href="#degustacao">
        Agendar
      </a>
    </nav>
  );
}
