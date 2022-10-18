import { useState } from "react";
import './index.scss'


    import VerFebre from "../calculo/febre";


export default function Index(){
    const [temperatura,setTemperatura] = useState();
    const [resposta,setResposta] = useState ();

  function calcularFebre(){
    const febre = VerFebre(temperatura);
    setResposta(febre ); 
  }

  return(
    <div>
        <h1>Calcular Febre</h1>
        <div>
            <h4>Verificar Agora a sua Temperatura:</h4>
            <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)} />

            <button onClick={calcularFebre}>Verificar</button>
            <div>
                <span>Sua Temperatura é:{resposta}</span>
            </div>
        </div>
    </div>
  )
}