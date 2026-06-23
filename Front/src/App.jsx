import { useState } from 'react'

function App() {
  
  return (
<main className="bg-gray-950 flex">
  {/* Cor nav bar na direita */}
  <aside className='w-64 bg-blue-950 p-6 flex flex-col max-h-max '>

    <div className='mb-10 text-center '>
      {/* Qro colocar uma foto */}
      <a href="http://"></a>
      <h2 className='text-3xl font-bold text-blue-400'> LibManager </h2>
    </div>

    <nav className='h-screen w-100 flex flex-col'>
      <ul className=''>
        <li className='text-white'> Inicio </li>
        <li className='text-pink-400'>Listar Livros </li>
        <li className='text-white'> Novo Livro </li>
        <li className='text-white'> Ajustes </li>
      </ul>
    </nav>

  </aside>

 <section className='flex-1 p-10'> 

    <header className="">
      {/* Parte de cima dashbord */}
      <h1 className=' text-cyan-300 text-center text-blue-400'> DASHBOARD DO BIBLIOTECÁRIO </h1>
      <br />
    </header>

{/* Parte esqueda (Acervo de livros) */}
    <article className='bg-blue-950  '>
      {/* Div pai que comanda tanto o acerv de livros quanto o 84 livros cadastrados */}
      <div className='bg-blue-950 border-t-4 border-green-500 p-6  '>
        <h3 className='text-white bg-blue-950'> Acervo de livros </h3>
        <p className='text-green-300 font-semibold bg-blue-950 '>84 livros Cadastrados</p>
      </div>

      <section>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse '>
            <thead className='bg-blue-900 text-blue-400'>
              <tr>
                <td className='p-5 font-bold '>Titulo</td>
                <td className='p-4 font-bold'>Autor</td>
                <td className='p-4 font-bold'>Ano</td>
                <td className='p-4 font-bold'>Status</td>
                <td className='p-4 font-bold'>Ação</td>
              </tr>
            </thead>
            <tbody className='bg-white-950 text-white'>
              <tr className='border-b border-slate-900'>
                <td className='p-4' >Clean Code</td>
                <td className='p-4'>Robert Martin</td>
                <td className='p-4'>2088</td>
                <td className='p-4 text-green-500 font-semibold '>Disponivel
                </td>

                <td className='p-4'>
                  <button className='bg-pink-500 px-5 py-2 rounded text-white font-bold duration-300'>Emprestar</button>
                </td>
              </tr>

              <tr className=''>
                <td className='p-4'>Refactoring</td>
                <td className='p-4'>Martin Fowler</td>
                <td className='p-4'>1999</td>
                <td className='p-4 text-pink-400 font-semibold'> Emprestado </td>
                <td className='p-4'> <span className='text-white bg-pink-300'> Indisponivel </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 '>

      <div className='bg-[#081224] p-6'>
        <p className='text-slate-100'> <span className='font-bold text-white'> Estetica tailwind: </span>{" "} Cores sóbrias (Cinza/Azul) para sistemas admistrativos </p>
      </div>

      <div className='bg-[#081224] p-6'>
        <p className='text-slate-100'> <span className='font-bold text-white'> Dados de Estrutura: </span>{" "} Foco em tabelas para maipulação oficiente </p>
      </div>

    </section>

    <footer className='text-center text black'> </footer>

 </section>
</main>
  )
}
export default App
// Lembrete: O Componente SEMPRE começa com letra maiscula, por isso APP.jsx