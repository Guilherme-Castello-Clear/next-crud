import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 19, '2'),
    new Cliente('Maria', 49, '3'),
    new Cliente('Rosa', 51, '4'),   

  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExluido(cliente: Cliente){
    console.log('Excluir cliente '+cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-600 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className={'mb-4'} onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExluido}
            />
          </>

        ) : (

          <Formulario clienteMudou={salvarCliente} cliente={cliente} cancelado={() => setVisivel('tabela')}/>
          
        )}

      </Layout>

    </div>
  )
}
