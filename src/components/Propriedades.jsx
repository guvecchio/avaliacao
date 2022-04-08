import React from 'react'

import Card from "./Card"
import { connect } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
function Propriedades(props) {
    const { num } = props
    return (
        <Card title={props.titulo} red3>
            <div>
                <span>
                    
                    <span>{props.aluno}, sua nota é: </span>
                    <span>{ num }</span>

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

export default connect(mapStateToProps)(Propriedades)