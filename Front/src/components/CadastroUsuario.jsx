import { useState } from "react";
import axios from "axios";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function cadastrarUsuario(e) {

    e.preventDefault();

    try {

      const resposta = await axios.post(
        "http://localhost:3000/cadastro",

        {
          nome, email, senha
        }

      );

      alert(
        resposta.data.mensagem
      );

      setNome("");
      setEmail("");
      setSenha("");

    } catch (erro) {

     console.log(erro);

alert(
  JSON.stringify(
    erro.response?.data || erro.message
  )
);
    }
  }

  return (

   <div className="w-full min-h-screen bg-[#030712] flex items-center justify-center p-4">

      <h2 className="text-4xl text-cyan-400 text-center mb-8"> Cadastrar novo leitor </h2>

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
            className="w-full bg-slate-800 text-white p-3 rounded"
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
            className="w-full bg-slate-800 text-white p-3 rounded"
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
            className="w-full bg-slate-800 text-white p-3 rounded"
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

    </div>

  );
}

export default CadastroUsuario;