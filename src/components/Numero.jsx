import React from "react";
import "./Numero.css";

import Card from "./Card";
import { connect } from "react-redux";
import {alterarNumero} from "../store/actions/numeros"

// eslint-disable-next-line import/no-anonymous-default-export
function Numero(props) {
  const { num } = props;
  return (
    <Card title="Escolha um Número" red2>
      <div className="Numero">
        <span>
          <span>Número: </span>
          <input type="number" value={num}
          onChange={e => props.alterarValor(+e.target.value)}/>
        </span>

      </div>
    </Card>
  );
}

function mapDispatchToProps(dispatch) {
  return {
      alterarValor(novoNumero) {
          const action = alterarNumero(novoNumero)
          dispatch(action)
      }
  }
}

function mapStateToProps(state) {
    return{
        num: state.numeros.num,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numero)