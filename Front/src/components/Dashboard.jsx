function Dashboard() {

  return (
    <>

      <header>

        {/* Parte de cima dashboard */}
        <h1 className='text-cyan-300 text-center text-blue-400'>
          DASHBOARD DO BIBLIOTECÁRIO
        </h1>

        <br />

      </header>

      {/* Parte esquerda (Acervo de livros) */}
      <article className='bg-blue-950'>

        {/* Div pai que comanda tanto o acervo quanto a quantidade */}
        <div className='bg-blue-950 border-t-4 border-green-500 p-6'>

          <h3 className='text-white'>
            Acervo de livros
          </h3>

          <p className='text-green-300 font-semibold'>
            84 livros cadastrados
          </p>

        </div>

        {/* Tabela */}
        ...
      </article>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>

        <div className='bg-[#081224] p-6'>

          <p className='text-slate-100'>

            <span className='font-bold text-white'>
              Estética Tailwind:
            </span>

            {" "}
            Cores sóbrias (Cinza/Azul) para sistemas administrativos

          </p>

        </div>

        <div className='bg-[#081224] p-6'>

          <p className='text-slate-100'>

            <span className='font-bold text-white'>
              Dados de Estrutura:
            </span>

            {" "}
            Foco em tabelas para manipulação eficiente

          </p>

        </div>

      </section>

    </>
  )
}

export default Dashboard