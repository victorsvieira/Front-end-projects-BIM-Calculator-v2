import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bim, setBim] = useState(0);
    const [showResults, setShowResults] = useState(false);

    function calculateBim() {
        if (weight === '' || height === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else {
            setBim((parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2));
            setShowResults(true);
        }
    }

    function generateGraphics(color) {
        return (
            <div className='rectangle' style={{ backgroundColor: color }} ></div>
        )

    }

    function visualInterpretation(bim) {
        if (bim < 18.5) {
            return (
                <div className='visual-interpretation' >
                    <p>Você está abaixo do peso normal.</p>
                    {generateGraphics('yellow')}
                </div>
            )
        } else if (bim >= 18.5 && bim < 24.9) {
            return (
                <div className='visual-interpretation' >
                    <p>Parabéns! Seu peso é normal.</p>
                    {generateGraphics('green')}
                </div>
            )
        } else if (bim >= 25 && bim < 29.9) {
            return (
                <div className='visual-interpretation' >
                    <p>Atenção! Você está com excesso de peso.</p>
                    {generateGraphics('orange')}
                </div>
            )

        } else if (bim >= 30 && bim < 34.9) {
            return (
                <div className='visual-interpretation' >
                    <p>Atenção! Você tem obesidade grau I.</p>
                    {generateGraphics('darkorange')}
                </div>
            )

        } else if (bim >= 35 && bim < 39.9) {
            return (
                <div className='visual-interpretation' >
                    <p>Atenção! Você tem obesidade grau II.</p>
                    {generateGraphics('red')}
                </div>
            )
        } else if (bim > 40) {
            return (
                <div className='visual-interpretation' >
                    <p>Atenção! Você tem obesidade grau III</p>
                    {generateGraphics('darkred')}
                </div>
            )
        } else {
            return <p>Erro no cálculo</p>
        }
    }



    return (
        <div className='appDiv' >
            <div className='calculator'>
                <div className='input-group' >
                    <p className='infoCalculator' >Preencha o formulário com as informações solicitadas e compare com os índices.</p>
                    <label>
                        Digite seu peso (em KG):
                        <input type="number" autoFocus onChange={(e) => setWeight(e.target.value)} />
                    </label>
                    <label>
                        Digite sua altura (em METROS):
                        <input type="number" onChange={(e) => setHeight(e.target.value)} />
                    </label>
                    <button className='buttonCalculate' onClick={calculateBim}>Calcular</button>
                </div> </div>

            <div className='results'>
                <h2>Resultado</h2>
                <h1 className='bim-result'>{bim}</h1>
                <div className='visual-interpretation' >
                    {showResults && visualInterpretation(bim)}
                </div>
                <div className="header-graphic-reference">
                    <p>Abaixo do peso<br />&lt;18,5</p>
                    <p>Peso normal<br />18,5 a 24,9</p>
                    <p>Acima do peso<br />25 a 29,9</p>
                    <p>Obesidade 1º<br />30 a 34,9</p>
                    <p>Obesidade 2º<br />35 a 39,9</p>
                    <p>Obesidade 3º<br />&gt;18,5</p>
                </div>
                <div className="graphic-reference">

                    <div className="rect yellow"></div>
                    <div className="rect green"></div>
                    <div className="rect orange"></div>
                    <div className="rect darkorange"></div>
                    <div className="rect red"></div>
                    <div className="rect darkred"></div>
                </div>

                <p style={{ fontStyle: "italic" }} >O bim é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula:
                    bim = peso / (altura x altura).</p>
            </div>
        </div>
    )
}

export default Calculator