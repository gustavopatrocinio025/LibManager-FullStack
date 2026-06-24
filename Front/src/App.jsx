import { useState } from 'react'

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import NovoLivro from "./components/NovoLivro";

import Login from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";

function App() {

  const [logado, setLogado] = useState(
    !!localStorage.getItem("token")
  );

  const [telaAuth, setTelaAuth] = useState(
    "cadastro"
  );

  const [paginaAtual, setPaginaAtual] =
    useState("dashboard");

  function renderizarPagina() {

    switch (paginaAtual) {

      case "novoLivro":
        return <NovoLivro />;

      case "dashboard":
      default:
        return <Dashboard />;
    }
  }

  // Área de autenticação
  if (!logado) {

    if (telaAuth === "cadastro") {

      return (
        <CadastroUsuario
          irParaLogin={() =>
            setTelaAuth("login")
          }
        />
      );
    }

    return (
      <Login
        setLogado={setLogado}
      />
    );
  }

  return (

    <main className="bg-gray-950 flex min-h-screen">

      {/* Barra lateral de navegação */}
      <Navbar
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />

      <section className="flex-1 p-10">

        {/* Conteúdo principal */}
        {renderizarPagina()}

        <footer className="text-center text-black">
          {/* Rodapé futuro */}
        </footer>

      </section>

    </main>

  );
}

export default App;

// OBS: O componente SEMPRE começa com letra maiúscula.