import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import styles from './styles.module.css';

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
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.75-3.65a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
            </svg>
            Siga a MythBeer no Instagram
          </a>
        </div>
      </main>
    </Container>
  );
}
