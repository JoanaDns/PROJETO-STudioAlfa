import "./main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rápidos e acessivel para o seu negócio crescer na
          web.
        </p>

        <div className="hero-buttons">
          <a href="#orcamento" className="btn-primary">
            Peça um Orçamento!
          </a>
          <a href="#portifolio" className="btn-secondary">
            Ver Portifólio!
          </a>
        </div>
      </section>

      <section className="servico">
        <h2>Nossos Serviços</h2>

        <div className="servicos-grid">
          <div className="servico-card">
            <span>🤮</span>
            <h3>Design de Interface</h3>
            <p>Telas claras, pensadas para usuário</p>
          </div>

          <div className="servico-card">
            <span>😍</span>
            <h3>Responsividade</h3>
            <p>O mesmo site em qualquer tela</p>
          </div>

          <div className="servico-card">
            <span>👌</span>
            <h3>Performece</h3>
            <p>Páginas leves e processamento rápido</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
