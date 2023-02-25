import React from "react";  //necessary?
import ReactDOM from "react-dom/client"; 



//Propably better implemented with factory function to clearer seperate UI and functionality.
//In this way button could be implemented somewhere else with different functionality but same UI.
const GreetButton = ({greeting = "Hello World"} : {greeting?: string}) => {

  const handleClick = () => {
    sayHello(greeting);
  }

  async function sayHello (greeting) {
    const display = document.getElementById("display");
    if (display) {
      display.textContent = greeting + "!";
      await new Promise(resolve => setTimeout(resolve, 1000));
      display.textContent = "0";
    }
    else {
      alert("Error: Display Element not found!")
    }
  }

  return <button onClick={handleClick}>{greeting}</button>;
};

const rootNode = document.getElementById('test-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<GreetButton/>);


/* 
      Container for Scrimba code:
*/

function MyNavBar () {
    return (
        <nav>
            <h1>Brand Name</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

ReactDOM.render(<MyNavBar />, document.getElementById("root"));