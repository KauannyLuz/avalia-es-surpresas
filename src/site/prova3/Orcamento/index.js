import './index.scss'
import { useState } from "react"


export default function Orcamento (){

const [ gastos,setGastos]=useState();
const [ ganhos,setGanhos]=useState();
const [ msg, setMsg]=useState();

function sitOrcamento(ganhos,gastos){
    let porcentagem = (ganhos*100/gastos);


    if (gastos>ganhos ){
    setMsg('orçamento comprometido! Hora de rever seus gastos!')
    }

    else if (gastos > ((81/100) * ganhos) && gastos < ganhos ){
    setMsg('')
    }

    else if (gastos > ((51/100) * ganhos) && gastos < ((80/100) * ganhos) ){
        setMsg('')
    }


}
}