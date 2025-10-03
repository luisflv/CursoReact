import React, {useState} from 'react'

function RenderizacaoCondicional() {
    const [mostrarTexto, setMostrarTexto] = useState(true);
    const [numero, setNumero] = useState(1);

  return (
    <div>
        <h2> Exemplo de renderização condicional </h2>
        <button onClick={()=>setMostrarTexto(!mostrarTexto)}> Alternar texto </button>
        {mostrarTexto && <p>Esse texto é exibido quando a variável <code>mostrarTexto</code> for verdadeiro</p>}
   
        <button onClick={()=>setNumero(numero + 1)}> Incrementar número </button>
        <p> O número {numero} é {numero % 2 == 0 ? 'Par' : 'Ímpar'}</p>
    </div>
  )
}

export default RenderizacaoCondicional