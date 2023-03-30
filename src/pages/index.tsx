import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 19, '2'),
    new Cliente('Maria', 49, '3'),
    new Cliente('Rosa', 51, '4'),   

  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExluido(cliente: Cliente){
    console.log('Excluir cliente '+cliente.nome)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-600 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <div className='flex justify-end'>
          <Botao cor='green' className={'mb-4'}>Novo Cliente</Botao>
        </div>
        <Tabela 
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExluido}
        />

        <Formulario cliente={clientes[0]}/>
      </Layout>

    </div>
  )
}
