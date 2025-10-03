import React, { useState } from 'react'

function ListaExemplo() {

    const [itens, setItens] = useState(['Maçã', 'Banana', 'Laranja'])

    function removerUltimoItem() {
        setItens((prevItens) => prevItens.slice(0, -1))
    }

    return (

        <div>
            <ul>
                {itens.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <button onClick={removerUltimoItem}>Remover último item </button>
        </div>
    )
}

export default ListaExemplo