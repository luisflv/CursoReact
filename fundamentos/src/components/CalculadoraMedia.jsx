
import React,{useState} from 'react'
import './CalculadoraMedia.css'

function CalculadoraMedia() {

    /*States utilizadas durante todo o ciclo de vida do componente*/
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [media, setMedia] = useState(0);

    

    function calcularMedia() {
        const mediaCalculada = ((parseFloat(numero1) + parseFloat(numero2)) / 2).toFixed(2);
        setMedia(mediaCalculada);
    }

    return (
        <div className='calculadora-container'>
            <h2> Calculadora de média </h2>
            <div className='input-group'>
                <label>
                    Número 1:
                    <input type="number" autoFocus onChange={(e) => setNumero1(e.target.value)} />
                    {console.log(numero1)}
                </label>
            </div>
            <div className="input-group">
                <label>
                    Número 2:
                    <input type="number" onChange={(e) => setNumero2(e.target.value)} />
                    {console.log(numero2)}
                </label>
            </div>
            <button className='calcular-button' onClick={calcularMedia}>Calcular média</button>
            <h2> A média é {media}</h2>
        </div>

    )
}

export default CalculadoraMedia