import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente();

  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)


        setVisivel('tabela')
      })
    }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
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
