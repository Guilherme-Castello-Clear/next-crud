import { useState } from "react"
import Cliente from "../core/Cliente";
import Entrada from "./Entrada"
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteMudou: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Entrada texto='Código' valor={id} somenteLeitura className='mb-5'></Entrada>
            ) : false}
            <Entrada texto='Nome' className='mb-5' valor={nome} valorMudou={setNome}></Entrada>
            <Entrada texto='Idade' valor={idade} valorMudou={setIdade}tipo='number'></Entrada>
            <div className='mt-3 flex justify-end'>
                <Botao cor='blue' onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} className='mr-2'>{id ? 'Alterar' : 'Criar'}</Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}