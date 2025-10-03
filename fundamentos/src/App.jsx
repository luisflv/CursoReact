import './App.css'
import Botao from './components/Botao'
import CalculadoraMedia from './components/CalculadoraMedia'
import CalculadoraVolume from './components/CalculadoraVolume'
import Contador from './components/Contador'
import ImagensReact from './components/ImagensReact'
import ListaExemplo from './components/ListaExemplo'
import MeuComponenteCSS from './components/MeuComponenteCSS'
import MeuComponenteCSSDinamico from './components/MeuComponenteCSSDinamico'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'
import Renderizacao from './components/Renderizacao'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import Aluno from './components/Aluno'
import Caixa from './components/Caixa'
import BotaoIncrementar from './components/BotaoIncrementar'
import { useState } from 'react'

function App() {

  const alunos = [
    { nome: "Juquinha", curso: "React", turma: "Turma 01" },
    { nome: "Maria", curso: "Python", turma: "Turma 02" },
    { nome: "Pedro", curso: "C#", turma: "Turma 03" },
    { nome: "Ana", curso: "Java", turma: "Turma 04" }
  ]

const [contador, setContador ] = useState(0);
  function incrementarContador(){
    setContador(contador + 1)
  }

  return (
    <>
      <div className="">

      </div>

      {/*<MeuPrimeiroComponente/>
         <Botao/>
         <Renderizacao/>
         <ImagensReact/>}
        {<Contador/>}
        {<CalculadoraMedia />}
        {<CalculadoraVolume/>}
        {<MeuComponenteCSS/>}
        {<MeuComponenteCSSDinamico/>}
        {<ListaExemplo/>}
        {<RenderizacaoCondicional/>}

        {alunos.map((alunos, index) => (

        <Aluno key={index} props={alunos} />
      ))}
        
        //PROP CHILDES
       <Caixa>
        <h3> Informação importante </h3>
        <p> Esse componente mostra como usar <code>prop children </code> </p>
      </Caixa>
        <h2 className="title"> Teste de vazamento CSS para outros componentes </h2>
    
        {<h1>Fundamentos React</h1>
        <p> Seção para aprendermos os fundamentos do React</p>
        <img src="image.png" width="100px" alt="Logo do IFSC" />

        Props
           <Aluno nome="Luís" curso="React" turma="Turma 01" />
           <Aluno nome="Varela" curso="React" turma="Turma 02" />
      */}

      <h2> Você clicou {contador} vezes no botão</h2>
      <BotaoIncrementar funcao={incrementarContador}/>
      

    </>
  )
}

export default App
