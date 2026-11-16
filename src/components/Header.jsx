function Header({ revisados, total }) {
  return (
    <header>
      <h1>Guia de Estudos</h1>
      <p>
        Revisados: {revisados}/{total}
      </p>
    </header>
  );
}

export default Header;