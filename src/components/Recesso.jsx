import React from 'react'

import Card from "./Card"
import { connect } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
/* export default props => { */
function Recesso(props) {
    const { num } = props
    return (
        <Card title="Está chegando..." red5>
            <div>
                <span>
                    
                    <span>Resultado: </span>
                    <span>Estarei de recesso em { num } dias</span>

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

export default connect(mapStateToProps)(Recesso)