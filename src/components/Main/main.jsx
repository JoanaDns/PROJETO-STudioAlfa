import "./main.css";
import ServicoCard from "../ServicoCard/servico";

const servicos = 
[ 
{id: 1, icon:"🤢", titulo:"Design de Interface", descricion:"Telas claras, pensadas para usuário"},   
{id: 2, icon:"😻", titulo:"Responsividade", descricion:"O mesmo site em qualquer tela"},
{id: 3, icon:"👌", titulo:"Performece", descricion:"Páginas leves e processamento rápido"}    
]

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
        {servicos.map((Servico)=> (
        <ServicoCard
        key={Servico.id}
        icon = {Servico.icon}
        titulo = {Servico.titulo}
        descricion = {Servico.descricion} 
        />
        ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
