import React, { useState } from 'react';
import '../css/calculadora.css';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para lidar com o cálculo
  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
      return;
    }

    let calculo;
    switch (operacao) {
      case '+':
        calculo = n1 + n2;
        break;
      case '-':
        calculo = n1 - n2;
        break;
      case '*':
        calculo = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResultado("Erro: Divisão por zero");
          return;
        }
        calculo = n1 / n2;
        break;
      default:
        setResultado("Operação inválida");
        return;
    }
    setResultado(calculo);
  };

  // Função para limpar todos os campos
  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <div className="container-app">
      <div className="calculadora">
        <h2 className="titulo">
          Calculadora
        </h2>

        <div className="input-container">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            className="input-field"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            className="input-field"
          />
        </div>

        <div className="botoes">
          <button
            onClick={() => calcular('+')}
            className="btn btn-operacao"
          >
            +
          </button>
          <button
            onClick={() => calcular('-')}
            className="btn btn-operacao"
          >
            -
          </button>
          <button
            onClick={() => calcular('*')}
            className="btn btn-operacao"
          >
            ×
          </button>
          <button
            onClick={() => calcular('/')}
            className="btn btn-operacao"
          >
            ÷
          </button>
        </div>

        <div className="resultado-container">
          <div className="resultado-label">
            Resultado
          </div>
          <div className="resultado-valor">
            {resultado}
          </div>
        </div>

        <button
          onClick={clearFields}
          className="btn btn-limpar"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default App;