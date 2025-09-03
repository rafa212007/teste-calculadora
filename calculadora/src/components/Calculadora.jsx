import { useState } from "react";
import "../css/calculadora.css"; // importando o CSS

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos");
      return;
    }

    switch (operacao) {
      case "+":
        setResultado(n1 + n2);
        break;
      case "-":
        setResultado(n1 - n2);
        break;
      case "*":
        setResultado(n1 * n2);
        break;
      case "/":
        setResultado(n2 !== 0 ? n1 / n2 : "Erro: divisão por zero");
        break;
      default:
        setResultado("Operação inválida");
    }
  };

  return (
    <div className="calculadora">
      <h2>🧮 Calculadora</h2>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
      </div>

      <div className="botoes">
        <button className="btn add" onClick={() => calcular("+")}>+</button>
        <button className="btn sub" onClick={() => calcular("-")}>-</button>
        <button className="btn mult" onClick={() => calcular("*")}>×</button>
        <button className="btn div" onClick={() => calcular("/")}>÷</button>
      </div>

      <div className="resultado">
        <h3>Resultado: <span>{resultado}</span></h3>
      </div>
    </div>
  );
}
