import React, { useState } from 'react'

import './App.css'

function App() {
  const [weigth, setWeigth] = useState("");
  const [heigth, setHeigth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tmbCalculo, setTmbCalculo] = useState(null);
  const [exercises, setExercises] = useState("")
  const [tmbCalss, setTmbCalss] = useState(0);
  const [tmbCals, setTmbCals] = useState(0);
  const [tmbCald, setTmbCald] = useState(0);
  const [tmbCaldd, setTmbCaldd] = useState(0);



  const calcularCal = () => {
    if(!weigth || !heigth || !age || !gender || !exercises){
      alert("Por favor, informe sua altura, peso, idade ou sexo");
      return;
    }
    let calculo;
    if (gender === "masculino"){
      calculo = 88.362 + (13.397 * weigth) + (4.799 * heigth) - (5.677 * age);
    } else {
      calculo = 447.593 + (9.247 * weigth) + (3.098 * heigth) - (4.330 * age);
    }

    if (exercises === "sed"){
      calculo = calculo * 1.2
    } else if (exercises === "leve"){
      calculo = calculo * 1.375
    } else if (exercises === "mod"){
      calculo = calculo * 1.55
    } else if (exercises === "int"){
      calculo = calculo * 1.725
    } else {
      calculo = calculo * 1.9
    }

    setTmbCalss((calculo + 1000).toFixed(2));
    setTmbCals((calculo + 500).toFixed(2));
    setTmbCald((calculo - 500).toFixed(2));
    setTmbCaldd((calculo - 1000).toFixed(2));

    setTmbCalculo(calculo.toFixed(2));
    

  }

  const clearcal = () =>{
    setHeigth("");
    setWeigth("")
    setGender("");
    setAge("");
    setExercises("");
  }


  return (
   <div className='div-p'>
    <h1>Calculadora de Gasto Calórico Diário</h1>
    <div>
      <label>Peso (kg): </label>
      <input 
        type="number"
        value={weigth}
        onChange={(e) => setWeigth(e.target.value)}
        placeholder='Digite seu peso'
        />
    </div>
    <div>
      <label>Altura (cm): </label>
      <input 
        type="number"
        value={heigth}
        onChange={(e) => setHeigth(e.target.value)}
        placeholder='Digite sua altura'
        />
    </div>
    <div>
      <label>Idade: </label>
      <input 
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder='Digite sua idade'
        />
    </div>

    <div>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Selecione seu sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
    </div>

    <div>
      <select value={exercises} onChange={(e) => setExercises(e.target.value)}  id='select-exe'>
          
          <option value="">Selecione seu nivel de atividade</option>
          <option value="sed">Sedentário (pouco ou nenhum exercício)</option>
          <option value="leve">Atividade leve (exercícios leves 1 a 3 dias por semana)</option>
          <option value="mod">Atividade moderada (exercícios moderados 3 a 5 dias por semana)</option>
          <option value="int">Atividade intensa (exercícios intensos 6 a 7 dias por semana)</option>
          <option value="mint">Atividade muito intensa (treinamento físico intenso, duas vezes por dia, etc.)</option>
        </select>
    </div>

    

    <div><button onClick={()=>{calcularCal(); clearcal(); }}>Calcular</button></div>

    {tmbCalculo && (
      <div className={tmbCalculo ? "" : 'placeholder'}>
        <h2>Seu gasto calórico diário é de: {tmbCalculo}</h2>
<table>
    <thead className={tmbCalculo ? "" : 'placeholder'}>
        <tr>
            <th></th>
            <th>Você terá que consumir</th>
        </tr>
    </thead>
    <tbody className={tmbCalculo ? "" : 'placeholder'}>
        <tr>
            <td>Perder 1 KG por semana (não recomendado)</td>
            <td>{tmbCaldd} kcal/dia</td>
        </tr>
        <tr>
            <td>Perder 0,5 KG por semana</td>
            <td>{tmbCald} kcal/dia</td>
        </tr>
        <tr>
            <td>Ganhar 0,5 KG por semana</td>
            <td>{tmbCals} kcal/dia</td>
        </tr>
        <tr>
            <td>Ganhar 1 KG por semana (não recomendado)</td>
            <td>{tmbCalss} kcal/dia</td>
        </tr>
    </tbody>
</table>
      </div>
      
      
      
    )}
    
   </div>
  )
}

export default App
