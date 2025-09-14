import React from 'react'

function ExtraInfo() {
    return (
        <div className='extra-info'>
            <h4>O que é o IMC?</h4>
            <p>É uma medida utilizada para avaliar se uma pessoa possui um peso adequado em relação à sua altura. É calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado.</p>
            <h4>Como interpretar um resultado?</h4>
            <p>O IMC é classificado em diferentes categorias: Abaixo do peso (menor que 18.5), Peso normal (18.5 - 24.9), Sobrepeso (25 - 29.9), Obesidade Grau I (30 - 34.9), Obesidade Grau II (35 - 39.9) e Obesidade Grau III (maior ou igual a 40).</p>
            <h4>O IMC é um indicador de saúde?</h4>
            <p>Ele é uma ferramenta útil para uma avaliação inicial, mas não deve ser o único indicador de saúde. Fatores como composição corporal, massa muscular, idade, gênero e outros aspectos devem ser considerados para uma avaliação completa.</p>
            <h4>Quais são as limitações do IMC?</h4>
            <p>O IMC não diferencia entre massa muscular e gordura corporal, pode não ser adequado para atletas, idosos, gestantes ou pessoas com composições corporais específicas. Para uma avaliação mais precisa, é recomendado consultar um profissional de saúde.</p>
            <h4>Como posso melhorar o meu IMC?</h4>
            <p>Para melhorar seu IMC, é importante manter um estilo de vida saudável com alimentação equilibrada e prática regular de exercícios físicos. Consulte um profissional de saúde para orientações personalizadas.</p>

        </div>
    )
}

export default ExtraInfo