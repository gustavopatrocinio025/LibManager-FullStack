function Navbar({ paginaAtual, setPaginaAtual }) {

  return (
    <aside className="w-64 bg-blue-950 p-6">

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-blue-400">
          LibManager
        </h2>
      </div>

      <nav>
        <ul className="space-y-6">

          <li
            onClick={() => setPaginaAtual("dashboard")}
            className={`cursor-pointer ${
              paginaAtual === "dashboard"
                ? "text-pink-400"
                : "text-white"
            }`}
          >
            Início
          </li>

          <li className="text-white cursor-pointer">
            Listar Livros
          </li>

          <li
            onClick={() => setPaginaAtual("novoLivro")}
            className={`cursor-pointer ${
              paginaAtual === "novoLivro"
                ? "text-pink-400"
                : "text-white"
            }`}
          >
            Novo Livro
          </li>

          <li className="text-white cursor-pointer">
            Ajustes
          </li>

        </ul>
      </nav>

    </aside>
  );
}

export default Navbar;