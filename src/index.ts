//check for how many characters fit into display once, and store it until resize

const buttons:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "+", "-"];

buttons.forEach(button => {
  const element = document.getElementById(button);
  if (element) {
    element.addEventListener("click", () => calculatorInput(button));
  }
  else {
    alert("Error: Button not found")
  }
});

function calculatorInput (button:string): void {
        document.getElementById("display").textContent = document.getElementById("display").textContent?.concat(button);

}