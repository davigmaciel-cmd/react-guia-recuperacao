import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardConceito from "./components/CardConceito";
import ListaDuvidas from "./components/ListaDuvidas";

const topicos = [
  {
    id: 1,
    numero: "01",
    titulo: "Git e GitHub",
    explicacao:
      "Git: É uma ferramenta que permite controlar as alterações feitas no código de um projeto, salvando seu histórico de versões, e o github é uma plataforma online onde podemos armazenar, compartilhar e trabalhar em projetos usando o Git.",
    exemplo: 'git add . && git commit -m "primeiro commit" && git push',
  },
  {
    id: 2,
    numero: "02",
    titulo: "Node.js e npm",
    explicacao:
      "Node.js: É uma ferramenta que permite executar códigos JavaScript fora do navegador, principalmente no lado do servidor. E o NPM é um gerenciador de pacotes que permite instalar e organizar bibliotecas e ferramentas para projetos JavaScript.",
    exemplo: "npm install react",
  },
  {
    id: 3,
    numero: "03",
    titulo: "React e JSX",
    explicacao:
      "React: É uma biblioteca JavaScript usada para criar interfaces de sites e aplicativos de forma organizada e dinâmica. E o JSX é uma extensão do JavaScript que permite escrever estruturas parecidas com HTML dentro do código JavaScript.",
    exemplo: "function App(), return, *texto* e export default App;",
  },
  {
    id: 4,
    numero: "04",
    titulo: "Componentes e props",
    explicacao:
      "Componentes: São partes independentes de uma página que podem ser reutilizadas em diferentes lugares do projeto, como cabeçalho, botão e cartões. E as props são informações enviadas de um componente para outro, permitindo personalizar o conteúdo de cada componente.",
    exemplo:
      "function Aluno(props), return <h1>Olá, {props.nome}!</h1>; function App(), { return <Aluno nome='davi' />;",
  },
  {
    id: 5,
    numero: "05",
    titulo: "Estado e Hooks",
    explicacao:
      "Estado (State): É uma informação que pode mudar durante o uso de um aplicativo, atualizando o que aparece na tela. E hooks são recursos do React que permitem utilizar funcionalidades, como controlar estados e executar ações nos componentes.",
    exemplo:
      "function App(), const [contador, setContador] = useState(0); e return com botão",
  },
  {
    id: 6,
    numero: "06",
    titulo: "Eventos e validação",
    explicacao:
      "Eventos: São ações realizadas pelo usuário em uma página, como clicar em um botão, digitar ou enviar um formulário. E a validação é a verificação das informações inseridas pelo usuário para garantir que estejam corretas antes de serem enviadas.",
    exemplo: "function verificar(), let nome = 'Davi'; if e else, return com botão",
  },
  {
    id: 7,
    numero: "07",
    titulo: "Listas e imutabilidade",
    explicacao:
      "Listas: São conjuntos de informações que podem ser exibidas na tela usando o método map() no React. E imutabilidade é o princípio de não alterar diretamente os dados originais, criando uma nova lista quando precisamos fazer mudanças.",
    exemplo:
      "function App(), const nomes = ['Davi', 'João', 'Pedro']; return percorrendo pelos nomes",
  },
  {
    id: 8,
    numero: "08",
    titulo: "Arquitetura web",
    explicacao:
      "Arquitetura Web: É a estrutura de organização de um site ou aplicativo, dividindo suas partes para facilitar o desenvolvimento e a comunicação entre elas.",
    exemplo:
      "back-end = parte funcional, front-end = parte visual, banco de dados = armazena os dados do cadastro",
  },
];

function App() {
  const [revisados, setRevisados] = useState([]);

  function alternarRevisado(id) {
    setRevisados((anterior) =>
      anterior.includes(id)
        ? anterior.filter((x) => x !== id)
        : [...anterior, id]
    );
  }

  return (
    <>
      <main>
        <Header revisados={revisados.length} total={topicos.length} />

        <section className="grid">
          {topicos.map((t) => (
            <CardConceito
              key={t.id}
              {...t}
              revisado={revisados.includes(t.id)}
              onAlternar={() => alternarRevisado(t.id)}
            />
          ))}
        </section>
      </main>

      <ListaDuvidas />
    </>
  );
}

export default App;