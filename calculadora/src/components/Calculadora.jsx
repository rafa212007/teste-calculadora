import React, { useState } from 'react';
import 'tailwindcss/index.css';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl w-full max-w-xs mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Calculadora</h2>

        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            className="w-full p-4 text-xl rounded-lg border-2 border-gray-600 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            className="w-full p-4 text-xl rounded-lg border-2 border-gray-600 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          <button
            onClick={() => calcular('+')}
            className="p-4 text-2xl font-bold bg-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 active:scale-95"
          >
            +
          </button>
          <button
            onClick={() => calcular('-')}
            className="p-4 text-2xl font-bold bg-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 active:scale-95"
          >
            -
          </button>
          <button
            onClick={() => calcular('*')}
            className="p-4 text-2xl font-bold bg-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 active:scale-95"
          >
            ×
          </button>
          <button
            onClick={() => calcular('/')}
            className="p-4 text-2xl font-bold bg-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 active:scale-95"
          >
            ÷
          </button>
        </div>

        <div className="bg-gray-700 rounded-lg mb-4 border-2 border-gray-600 p-4 h-32">
          <div className="text-lg text-gray-400 font-light truncate">
            Resultado:
          </div>
          <div className="text-3xl text-white font-semibold mt-2">
            {resultado}
          </div>
        </div>

        <button
          onClick={clearFields}
          className="w-full p-4 text-2xl font-bold bg-red-500 text-white rounded-lg shadow-md transform hover:scale-105 active:scale-95"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default App;
