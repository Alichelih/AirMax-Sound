import React, { useState, useRef } from "react";
import "./style1.css";

function App() {
    const [expression, setExpression] = useState(0);
    const screenRef = useRef(null);

    const afficher = (value) => {
        setExpression((A) => (A === 0 ? value.toString() : A + value));
    };

    const calculate = () => {
        try {
            const result = new Function("return " + expression)();
            setExpression(result.toString());
        } catch (error) {
            setExpression("Error");
        }
    };

    const clearScreen = () => {
        setExpression("0");
    };
    const clear = () => {
        setExpression(expression.slice(0, -1));
    };

    return (
        <div id="main">
            <div id="app">
                <div id="screen" ref={screenRef}>{expression}</div>
                <div id="a1">
                    <button onClick={() => afficher(7)}>7</button>
                    <button onClick={() => afficher(8)}>8</button>
                    <button onClick={() => afficher(9)}>9</button>
                    <button onClick={() => afficher("/")}>/</button><br />
                    <button onClick={() => afficher(4)}>4</button>
                    <button onClick={() => afficher(5)}>5</button>
                    <button onClick={() => afficher(6)}>6</button>
                    <button onClick={() => afficher("*")}>*</button><br />
                    <button onClick={() => afficher(1)}>1</button>
                    <button onClick={() => afficher(2)}>2</button>
                    <button onClick={() => afficher(3)}>3</button>
                    <button onClick={() => afficher("-")}>-</button><br />
                    <button onClick={() => afficher(0)}>0</button>
                    <button onClick={() => afficher(".")}>.</button>
                    <button onClick={() => afficher("+")}>+</button>
                    <button id="btn2" onClick={calculate}>=</button><br />
                    <button onClick={clear}>c</button>
                    <button id="btn1" onClick={clearScreen}>Clear</button>
                    
                </div>
            </div>
        </div>
    );
}

export default App;


