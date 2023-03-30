interface BotaoProps{

    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
    
}

export default function Botao(props: BotaoProps){

    const cor = props.cor;
    var btnColor = '';

    switch(cor){

        case 'green':
            btnColor = `from-green-400 to-green-700`
        break;

        case 'blue':
            btnColor = `from-blue-400 to-blue-700`
        break;

        default:
            btnColor = `from-gray-400 to-gray-700`
        break;

    }

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${btnColor} 
            text-white px-4 py-2 rounded-md
            ${props.className}
            
        `}>
            {props.children}
        </button>
    )
}