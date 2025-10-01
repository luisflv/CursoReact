import './App.css'
import Botao from './components/Botao'
import CalculadoraMedia from './components/CalculadoraMedia'
import CalculadoraVolume from './components/CalculadoraVolume'
import Contador from './components/Contador'
import ImagensReact from './components/ImagensReact'
import MeuComponenteCSS from './components/MeuComponenteCSS'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'
import Renderizacao from './components/Renderizacao'

function App() {


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
     {<h1>Fundamentos React</h1>
     <p> Seção para aprendermos os fundamentos do React</p>
     <img src="image.png" width="100px" alt="Logo do IFSC" />*/}
    {<MeuComponenteCSS/>}
    <h2 className="title"> Teste de vazamento CSS para outros componentes </h2>

    </>
  )
}

export default App
