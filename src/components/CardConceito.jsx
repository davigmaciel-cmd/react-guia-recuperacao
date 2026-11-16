function CardConceito({ numero, titulo, explicacao, exemplo, revisado, onAlternar }) {
  return (
    <article className={revisado ? "card revisado" : "card"}>
      <span className="card-numero">CONTEÚDO {numero}</span>
      <h3>{titulo}</h3>
      <p>{explicacao}</p>
      <code>{exemplo}</code>
      <button onClick={onAlternar}>
        {revisado ? "Desmarcar revisado" : "Marcar como revisado"}
      </button>
    </article>
  );
}

export default CardConceito;