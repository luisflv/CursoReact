import React from 'react'

function MeuPrimeiroComponente() {
    const nome = "Luís Varela";
    const a = 15;
    const b = 25;
  return (
    <div>
        <h1>Meu primeiro componente</h1>
        <p> Exemplo de criação de componente </p>
        <p>Nome do usuário: {nome}, o resultado da soma é: {a} + {b} = {a + b}</p>
    </div>
  )
}

export default MeuPrimeiroComponente