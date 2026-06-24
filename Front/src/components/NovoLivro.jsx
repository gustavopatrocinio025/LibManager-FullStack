import { useState } from "react";
import axios from "axios";

function NovoLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ano, setAno] = useState("");

  async function cadastrarLivro(e) {
    e.preventDefault();
    try {

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa realizar o login.");
        return;
      }

      const resposta = await axios.post(
        "http://localhost:3000/livros",

        {
          titulo,
          autor,
          ano: Number(ano),
          status: "Disponível",
          categoria_id: Number(categoria)
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(resposta.data.mensagem);

      setTitulo("");
      setAutor("");
      setCategoria("");
      setAno("");

    } catch (erro) {

      console.error(erro);

      alert(
        erro.response?.data?.erro ||
        "Erro ao cadastrar o livro, tente novamente"
      );
    }
  }

  return (

    <div className="max-w-2xl mx-auto bg-[#081224] p-8 rounded-lg shadow-lg">

      <h2 className="text-3xl text-white mb-8 text-center">
        Cadastrar um novo livro
      </h2>

      <form
        onSubmit={cadastrarLivro}
        className="space-y-5"
      >

        <div>

          <label className="text-white mb-2"> Título:</label>

          <input
            type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className=" focus:outline-none w-full bg-slate-800 text-white p-3" required
          />

        </div>
        <div>

          <label className="block text-white mb-2">
            Autor:
          </label>

          <input
            type="text"  value={autor}  onChange={(e) => setAutor(e.target.value)} className=" focus:outline-none w-full bg-slate-800 text-white p-3 rounded" required
          />

        </div>

        <div>

          <label className="block text-white mb-2">
            Categoria:
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded"
            required
          >

            <option value="1">
              Romance
            </option>

            <option value="2">
              Drama
            </option>

            <option value="3">
              Terror
            </option>

          </select>

        </div>

        <div>

          <label className="block text-white mb-2">
            Ano de Publicação:
          </label>

          <input
            type="number" value={ano} onChange={(e) => setAno(e.target.value)} className=" focus:outline-none w-full bg-slate-800 text-white p-3 rounded" required
          />

        </div>

        <div className="flex gap-4">

          <button
            type="submit"
            className="bg-blue-600 text-black text-white  flex-1"
          >
            Salvar
          </button>

          <button
            type="button"  onClick={() => {
              setTitulo("");
              setAutor("");
              setCategoria("");
              setAno("");
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

export default NovoLivro;