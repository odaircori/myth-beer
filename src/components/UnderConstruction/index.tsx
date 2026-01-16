import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import styles from './styles.module.css';
import { FaInstagram } from 'react-icons/fa';

export function UnderConstruction() {
  return (
    <Container>
      <main className={styles.page}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.eyebrow}>Taverna em construção</p>
          <h1>O templo MythBeer ainda está sendo erguido.</h1>
          <p className={styles.lead}>
            Os deuses forjam os barris e gravam as runas sagradas. Em breve,
            abriremos os portões para o próximo brinde lendário.
          </p>
          <a
            className={styles.instagram}
            href="https://www.instagram.com/mythbeer"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Siga a MythBeer no Instagram
          </a>
        </div>
      </main>
    </Container>
  );
}
