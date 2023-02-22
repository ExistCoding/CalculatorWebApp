import React from "react";
import ReactDOM from "react-dom/client";

function sayHello () {
  const display = document.getElementById("display");
  if (display) {
    display.textContent = "Hello World!";
    setTimeout(() => {
      display.textContent = "0";
    }, 1000)
  }
  else {
    alert("Error: Display Element not found!")
  }
}

const Button = () => {
  const handleClick = () => {
    sayHello();
  }
  return <button onClick={handleClick}>Hello, world!</button>;
};

const rootNode = document.getElementById('test-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<Button />);