import React from 'react'

function Botao() {
    function handleClick(){
        alert("Você clicou no botão!");
    }
  return (
    <div>
        <button onMouseEnter={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Botao