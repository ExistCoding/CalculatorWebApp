import React from "react";
import ReactDOM from "react-dom/client";

async function sayHello () {
  const display = document.getElementById("display");
  if (display) {
    display.textContent = "Hello World!";
    await new Promise(resolve => setTimeout(resolve, 1000));
    display.textContent = "0";
  }
  else {
    alert("Error: Display Element not found!")
  }
}

//Propably better implemented with factory function to clearer seperate UI and functionality.
//In this way button could be implemented somewhere else with different functionality but same UI.
const Button = () => {
  const handleClick = () => {
    sayHello();
  }
  return <button onClick={handleClick}>Hello, world!</button>;
};

const rootNode = document.getElementById('test-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<Button />);