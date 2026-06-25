import { useState } from "react";
import axios from "axios";

function CadastroUsuario({ irParaLogin }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrarUsuario(e) {

    e.preventDefault();

    try {

      const resposta = await axios.post(
        "http://localhost:3000/cadastro",
        {
          nome,
          email,
          senha
        }
      );

      alert(
        resposta.data.mensagem ||
        "Usuário cadastrado com sucesso!"
      );

      setNome("");
      setEmail("");
      setSenha("");

      // Vai para tela de login
      irParaLogin();

    } catch (erro) {

      console.error(erro);

      alert(
        erro.response?.data?.erro ||
        erro.message ||
        "Erro ao cadastrar usuário"
      );
    }
  }

  return (

    <div className="w-full min-h-screen bg-[#030712] flex flex-col items-center justify-center p-4">

      <div className="bg-[#081224] p-8 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-4xl text-cyan-400 text-center mb-8">
          Cadastrar Usuário
        </h2>

        <form
          onSubmit={cadastrarUsuario}
          className="space-y-5"
        >

          <div>

            <label className="block text-cyan-400 mb-2">
              Nome Completo:
            </label>

            <input
              type="text"
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
              className="w-full bg-slate-800 text-white p-3 rounded focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block text-cyan-400 mb-2">
              E-mail:
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-slate-800 text-white p-3 rounded focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block text-cyan-400 mb-2">
              Senha:
            </label>

            <input
              type="password"
              value={senha}
              onChange={(e) =>
                setSenha(e.target.value)
              }
              className="w-full bg-slate-800 text-white p-3 rounded focus:outline-none"
              required
            />

          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-cyan-500 text-black font-bold px-8 py-3 rounded flex-1"
            >
              Salvar Usuário
            </button>

            <button
              type="button"
              onClick={() => {

                setNome("");
                setEmail("");
                setSenha("");

              }}
              className="bg-slate-600 text-white px-8 py-3 rounded flex-1"
            >
              Limpar
            </button>

          </div>

        </form>

        <p
          className="text-center text-cyan-400 mt-6 cursor-pointer hover:underline"
          onClick={irParaLogin}
        >
          Já possui conta? Fazer Login
        </p>

      </div>

    </div>

  );
}

export default CadastroUsuario;