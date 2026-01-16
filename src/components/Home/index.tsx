import styles from './index.module.css'

import { Container } from "../Container";
import { Menu } from "../Menu";

export function Home() {
  return (
    <>
      <Container>
        <header className="site-header" id="inicio">
          <Menu />
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.hero__content}>
              <p className={styles.eyebrow}>Cervejaria artesanal &amp; mitologia</p>
              <h1>MythBeer: a taverna onde lendas brindam com você.</h1>
              <p className={styles.lead}>
                Criamos receitas inspiradas em deuses, monstros e heróis. Cada
                gole revela uma história, cada rótulo acende um ritual.
              </p>
              <div className={styles.hero__actions}>
                <a className={`${styles.button} ${styles['button--primary']}`} href="#degustacao">
                  Reservar degustação
                </a>
                <a className={`${styles.button} ${styles['button--ghost']}`} href="#colecao">
                  Ver coleção
                </a>
              </div>
            </div>
            <div className={styles.hero__card}>
              <div>
                <h2>Templo MythBeer</h2>
                <p>Rua das Runas, 108 · Porto Velho · Qua-Sáb · 18h às 02h</p>
              </div>
              <div className={styles.hero__stats}>
                <div>
                  <strong>12</strong>
                  <span>rótulos sazonais</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>rituais guiados</span>
                </div>
                <div>
                  <strong>40</strong>
                  <span>barris lendários</span>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.alt}`} id="degustacao">
            <div className={styles.section__header}>
              <h2>Ritual de degustação</h2>
              <p>
                Uma experiência guiada com harmonizações, narrativa imersiva e
                trilha sonora original.
              </p>
            </div>
            <div className={styles.grid}>
              <article className={styles.panel}>
                <h3>Ritual das Constelações</h3>
                <p>
                  Degustação sob luzes âmbar, com trilhas inspiradas no Olimpo.
                </p>
                <ul>
                  <li>4 rótulos sazonais</li>
                  <li>Harmonização com queijos locais</li>
                  <li>Brinde com taça gravada</li>
                </ul>
              </article>
              <article className={styles.panel}>
                <h3>Ritual do Submundo</h3>
                <p>
                  Uma jornada noturna com cervejas escuras e histórias de Hades.
                </p>
                <ul>
                  <li>5 rótulos escuros</li>
                  <li>Charcutaria artesanal</li>
                  <li>Harmonização com sobremesas</li>
                </ul>
              </article>
            </div>
          </section>

          <section className={styles.section} id="colecao">
            <div className={styles.section__header}>
              <h2>Coleção de rótulos</h2>
              <p>
                Garrafas numeradas, etiquetas ilustradas por artistas locais e
                histórias colecionáveis.
              </p>
            </div>
            <div className={`${styles.grid} ${styles['grid--compact']}`}>
              {[
                {
                  name: "Ares Red Ale",
                  image:
                    "https://images.unsplash.com/photo-1513189737554-b1bbd839b9cd?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Selene Witbier",
                  image:
                    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Thor IPA",
                  image:
                    "https://images.unsplash.com/photo-1510641818989-c2051b5e2cfd?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Anúbis Porter",
                  image:
                    "https://images.unsplash.com/photo-1457518919282-b199744eefd6?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Íris Sour",
                  image:
                    "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Odin Barleywine",
                  image:
                    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item) => (
                <div key={item.name} className={`${styles.card} ${styles['card--ghost']}`}>
                  <img
                    src={item.image}
                    alt={`Garrafa de ${item.name}`}
                    className={styles.card__image}
                  />
                  <h3>{item.name}</h3>
                  <p>Disponível no tap room e na loja oficial MythBeer.</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer} id="contato">
          <div>
            <h2>Visite a MythBeer</h2>
            <p>
              Reservas: <strong>(69) 3333-7766</strong> ·
              <strong> mythbeer@taverna.com</strong>
            </p>
          </div>
          <div className={styles.footer__actions}>
            <a className={`${styles.button} ${styles['button--ghost']}`} href="#inicio">
              Voltar ao topo
            </a>
            <a className={`${styles.button} ${styles['button--primary']}`} href="#degustacao">
              Agendar agora
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
}
