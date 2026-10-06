import "./servico.css";

function ServicoCard({icon, titulo, descricion}){
    return(
        <div className="servico-card">
          <span>{icon}</span>
          <h3>{titulo}</h3>
          <p>{descricion}</p>
        </div>
    );
}

export default ServicoCard
