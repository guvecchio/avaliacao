import React from 'react'

import Card from "./Card"
import { connect } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
/* export default props => { */

function Sorteio(props) {
    const { num } = props

    function aleatorio(min, max) {
    /* Gerando um número inteiro aleatório entre dois valores, inclusive:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive */
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <Card title="Sorteio de Número de 0 a N" red4>
            <div>
                <span>
                    
                    <span>Resultado: </span>
                    <span>{aleatorio(0, num)}</span> {/* passando os valores mínimo e máximo para a função aleatório, pegando o número escolhido para máximo e atribuindo 0 como mínimo */}
                    
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)