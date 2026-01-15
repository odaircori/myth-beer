import './styles/theme.css';
import './styles/global.css';
import './styles/home.css';

import { Container } from './components/Container';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Container>
        <header className="site-header" id="inicio">
          <Menu />
        </header>

        <main>
          <section className="hero">
            <div className="hero__content">
              <p className="eyebrow">Cervejaria artesanal &amp; mitologia</p>
              <h1>MythBeer: a taverna onde lendas brindam com você.</h1>
              <p className="lead">
                Criamos receitas inspiradas em deuses, monstros e heróis. Cada
                gole revela uma história, cada rótulo acende um ritual.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#degustacao">
                  Reservar degustação
                </a>
                <a className="button button--ghost" href="#colecao">
                  Ver coleção
                </a>
              </div>
            </div>
            <div className="hero__card">
              <div>
                <h2>Templo MythBeer</h2>
                <p>
                  Rua das Runas, 108 · Porto Velho · Qua-Sáb · 18h às 02h
                </p>
              </div>
              <div className="hero__stats">
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

          <section className="section" id="panteao">
            <div className="section__header">
              <h2>Panteão MythBeer</h2>
              <p>
                Cada estilo homenageia uma entidade mitológica, com ingredientes
                e narrativas únicos.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Valquíria Lager</h3>
                <p>
                  Leve, dourada e perfumada com flor de laranjeira. Para brindar
                  vitória e coragem.
                </p>
                <span className="tag">4.8% ABV</span>
              </article>
              <article className="card">
                <h3>Kraken Stout</h3>
                <p>
                  Corpo intenso, notas de café e cacau. Ideal para noites de
                  tempestade.
                </p>
                <span className="tag">7.2% ABV</span>
              </article>
              <article className="card">
                <h3>Néctar de Atena</h3>
                <p>
                  Belgian ale com mel silvestre e especiarias. Sabedoria em cada
                  gole.
                </p>
                <span className="tag">6.1% ABV</span>
              </article>
            </div>
          </section>

          <section className="section alt" id="degustacao">
            <div className="section__header">
              <h2>Ritual de degustação</h2>
              <p>
                Uma experiência guiada com harmonizações, narrativa imersiva e
                trilha sonora original.
              </p>
            </div>
            <div className="grid">
              <article className="panel">
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
              <article className="panel">
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

          <section className="section" id="colecao">
            <div className="section__header">
              <h2>Coleção de rótulos</h2>
              <p>
                Garrafas numeradas, etiquetas ilustradas por artistas locais e
                histórias colecionáveis.
              </p>
            </div>
            <div className="grid grid--compact">
              {[
                'Ares Red Ale',
                'Selene Witbier',
                'Thor IPA',
                'Anúbis Porter',
                'Íris Sour',
                'Odin Barleywine',
              ].map((label) => (
                <div key={label} className="card card--ghost">
                  <h3>{label}</h3>
                  <p>Disponível no taproom e na loja oficial MythBeer.</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer" id="contato">
          <div>
            <h2>Visite a MythBeer</h2>
            <p>
              Reservas: <strong>(69) 3333-7766</strong> ·
              <strong> mythbeer@taverna.com</strong>
            </p>
          </div>
          <div className="footer__actions">
            <a className="button button--ghost" href="#inicio">
              Voltar ao topo
            </a>
            <a className="button button--primary" href="#degustacao">
              Agendar agora
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
}
