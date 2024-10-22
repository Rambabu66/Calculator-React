import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import DisplayContainer from "./components/DisplayContainer";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const targetValue = e.target.name;
    setDisplay(display + targetValue);
  }

  const clear = () => {
    setDisplay("");
    setResult("");
  };
  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const operatorClick = (operator) => {
    let lastCharacter = display.slice(-2);
    let operatorArray = ["+", "-", "*", "/"];

    if (display === "" || operatorArray.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => {
      return prevDisplay + " " + operator + " ";
    });
  };

  const handleEqual = () => {
    if (display.slice(-2).includes("+", "-", "*", "/")) return;
    setDisplay("");

    try {
      const resultValue = calculator(display);
      setResult(resultValue);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const calculator = (expession) => {
    const token = expession.split(" ");
    let resultValue = parseInt(token[0]);

    for (let i = 1; i < token.length; i += 2) {
      const operator = token[i];
      const nextNumber = parseInt(token[i + 1]);

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "*":
          resultValue *= nextNumber;
          break;
        case "/":
          resultValue -= nextNumber;
          break;
        default:
          resultValue = "Error";
      }
    }
    return resultValue
  };

  return (
    <div className="container">
      <div className="calculator">
        <DisplayContainer
          display={display}
          result={result}
          clear={clear}
          backspace={backspace}
        />
        <ButtonContainer
          operatorClick={operatorClick}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
