import { useState } from 'react';
import './app.css';

export default function App() {
  const [ weight, setWeight ] = useState('');
  const [ height, setHeight ] = useState('');

  const [ message, setMessage ] = useState('');

  function calculateIMC() {
    const imc = weight / ((height / 100) ** 2);

    if (imc < 18.6) {
      setMessage(`Abaixo do peso! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage(`Peso ideal! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 24.9 && imc< 34.9) {
      setMessage(`Levemente acima do peso! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc > 34.9) {
      setMessage(`Cuidado obesidade! Seu IMC: ${imc.toFixed(2)}`);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      
        <button onClick={calculateIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  )
}