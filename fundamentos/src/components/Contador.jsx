import React, {useState} from 'react'

function Contador() {
    
    const [contador, setContador] = useState(0); 
    
    {/*let contador = 0*/}

    function handleClick() {
        {/*contador ++;*/}
        setContador(contador+1);
        console.log(contador);
        
    }
    return (
        <div>
            <p>Você clicou {contador} vezes no botão</p>

            <button onClick={handleClick}>Clique aqui</button>

        </div>
    )
}

export default Contador