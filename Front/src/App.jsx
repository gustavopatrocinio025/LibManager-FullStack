import { useState } from 'react';

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import NovoLivro from "./components/NovoLivro";

import Login from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";

function App() {

  // Verifica se existe token salvo
  const [logado, setLogado] = useState(
    !!localStorage.getItem("token")
  );

  // Controla Login ou Cadastro
  const [telaAuth, setTelaAuth] = useState("cadastro");

  // Controla Dashboard ou Novo Livro
  const [paginaAtual, setPaginaAtual] = useState("dashboard");

  function renderizarPagina() {

    switch (paginaAtual) {

      case "novoLivro":
        return <NovoLivro />;

      case "dashboard":
      default:
        return <Dashboard />;
    }
  }

  // Se NÃO estiver logado
  if (!logado) {

    return telaAuth === "cadastro" ? (

      <CadastroUsuario
        irParaLogin={() => setTelaAuth("login")}
      />

    ) : (

      <Login
        setLogado={setLogado}
        irParaCadastro={() => setTelaAuth("cadastro")}
      />

    );
  }

  // Se estiver logado
  return (

    <main className="bg-gray-950 flex min-h-screen">

      {/* Barra lateral */}
      <Navbar
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />

      {/* Conteúdo */}
      <section className="flex-1 p-10">

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