import React from 'react'
import { useState } from 'react';
import './CalculadoraVolume.css'

function CalculadoraVolume() {

    const [comprimento, setComprimento] = useState('');
    const [largura, setLargura] = useState('');
    const [profundidade, setProfundidade] = useState('');
    const [volume, setVolume] = useState();

    function calcularVolume() {
        const resVolume = ((parseFloat(comprimento) * parseFloat(largura) * parseFloat(profundidade)));
        setVolume(resVolume);
    }


    return (
        <div className="volume-container">
            <h2> Calculadora Volume </h2>
            <div className="input-group">
                <label>
                    Comprimento:
                    <input text="number" autoFocus onChange={(e) => setComprimento(e.target.value).fixed(2)} />
                </label>
            </div>
            <div className="input-group">
                <label>
                    Largura:
                    <input text="number" onChange={(e) => setLargura(e.target.value).fixed(2)} />
                </label>
            </div>
            <div className="input-group">
                <label>
                    Profundidade:
                    <input text="number" onChange={(e) => setProfundidade(e.target.value).fixed(2)} />
                </label>
            </div>
            <button onClick={calcularVolume} className="calcular-button"> Calcular volume </button>
            <h2> O volume é: {volume}</h2>
        </div>
    )
}

export default CalculadoraVolume