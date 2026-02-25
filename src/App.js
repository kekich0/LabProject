import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Калькулятор суми</h1>

      <input
        type="number"
        placeholder="Введіть перше число"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Введіть друге число"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateSum}>Обчислити суму</button>

      {sum !== null && (
        <h2>Сума: {sum}</h2>
      )}
    </div>
  );
}

export default App;