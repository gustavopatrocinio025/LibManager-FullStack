import { useState } from "react";
import axios from "axios";

function Login({ setLogado }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function realizarLogin(e) {

    e.preventDefault();

    try {

      const resposta = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          senha
        }
      );

      localStorage.setItem(
        "token",
        resposta.data.token
      );

      alert("Login realizado com sucesso!");

      setLogado(true);

    } catch (erro) {

      console.error(erro);

      alert(
        erro.response?.data?.erro ||
        "Erro ao realizar login"
      );
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-950">

      <div className="w-full max-w-md bg-[#081224] p-8 rounded-lg shadow-lg">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-cyan-400">
            LibManager
          </h1>

        </div>

        <h2 className="text-3xl text-white mb-8 text-center">
          Login do Bibliotecário
        </h2>

        <form
          onSubmit={realizarLogin}
          className="space-y-5"
        >

          <div>

            <label className="block text-white mb-2">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: bibliotecario@biblioteca.com"
              className="w-full bg-slate-800 text-white p-3 rounded focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block text-white mb-2">
              Senha
            </label>

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full bg-slate-800 text-white p-3 rounded focus:outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-bold py-3 rounded"
          >
            Entrar
          </button>

        </form>

        <p className="text-center text-pink-400 mt-6 cursor-pointer">
          Esqueceu a senha?
        </p>

      </div>

    </div>
  );
}

export default Login;