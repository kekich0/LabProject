import React, { useState, useEffect } from "react";
import posthog from "posthog-js";
import { calculateSum } from "./utils/calculateSum";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [showPositiveOnly, setShowPositiveOnly] = useState(false);

  const status = process.env.REACT_APP_STATUS;

  useEffect(() => {
    posthog.init(process.env.REACT_APP_POSTHOG_KEY, {
      api_host: process.env.REACT_APP_POSTHOG_HOST,
      person_profiles: "identified_only",
    });

    posthog.onFeatureFlags(() => {
      if (posthog.isFeatureEnabled("show-positive-only")) {
        setShowPositiveOnly(true);
      }
    });
  }, []);

  const handleCalculate = () => {
    posthog.capture("calculate_clicked", {
      num1_filled: !!num1,
      num2_filled: !!num2,
    });

    if (num1 === "" || num2 === "") {
      posthog.capture("calculation_error", { error_type: "empty_fields" });
      return;
    }

    if (showPositiveOnly && (Number(num1) <= 0 || Number(num2) <= 0)) {
      alert("Тільки додатні числа!");
      posthog.capture("calculation_error", { error_type: "non_positive" });
      return;
    }

    const result = calculateSum(num1, num2);
    setSum(result);

    posthog.capture("calculation_performed", {
      result: result,
      num1: Number(num1),
      num2: Number(num2),
    });

    if (showPositiveOnly) {
      posthog.capture("positive_feature_used");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Калькулятор суми</h1>
      <p>Environment: {status}</p>

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

      <button onClick={handleCalculate}>Обчислити суму</button>

      {showPositiveOnly && (
        <p>Тільки додатні числа</p>
      )}

      {sum !== null && <h2>Сума: {sum}</h2>}
    </div>
  );
}

export default App;