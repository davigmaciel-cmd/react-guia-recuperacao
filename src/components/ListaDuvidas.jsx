import { useState } from "react";

function ListaDuvidas() {
  const [texto, setTexto] = useState("");
  const [duvidas, setDuvidas] = useState([]);

  function adicionarDuvida() {
    const limpo = texto.trim(); // trim impede entrada vazia ou só com espaços
    if (limpo === "") return;

    setDuvidas((anterior) => [...anterior, { id: Date.now(), texto: limpo }]);
    setTexto("");
  }

  return (
    <section className="duvidas">
      <h2>Minhas dúvidas</h2>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite sua dúvida"
      />
      <button onClick={adicionarDuvida}>Adicionar</button>

      <ul>
        {duvidas.map((d) => (
          <li key={d.id}>{d.texto}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListaDuvidas;