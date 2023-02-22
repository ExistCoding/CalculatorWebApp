//check for how many characters fit into display once, and store it until resize
/*
let numCharactersDisplay;

document.addEventListener("DOMContentLoaded", checkDisplayOverflow);
document.defaultView.addEventListener("resize", checkDisplayOverflow);

function checkDisplayOverflow():void {
  document.getElementById("display").textContent = "";
  let dispClientWidth:number = document.getElementById("display").clientWidth;
  let dispScrollWidth:number = document.getElementById("display").scrollWidth;
  while (!dispScrollWidth > dispClientWidth) {

}
*/
//  console.log("clientWidth: " + dispClientWidth);
//  console.log("scrollWidth: " + dispScrollWidth);
//  const isOverflowing:boolean = dispScrollWidth > dispClientWidth;
//  console.log("isOverflowing:" + isOverflowing);

//make it handle decimals properly
//make it not use eval/not compute through strings
//make it 3d?

function calculatorInput(button: string): void {
  const display = document.getElementById("display");
  if (display) {
    if (display.textContent === "0") {
      display.textContent = "";
    }
    display.textContent = display.textContent!.concat(button);
  } else {
    console.error("Error: Element with id 'display' not found.");
  }
}


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

document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  buttons.forEach(button => {
    if (event.key === button) {
      calculatorInput(button);
    }
  });
}, false);



function evaluate():void {
  const display = document.getElementById("display");
  if (display) {
    try {display.textContent = eval(display.textContent!)}
    catch {display.textContent = "Error"}
  } else {
    console.error("Error: Element with id 'display' not found.");
  }
}

document.getElementById("=")?.addEventListener("click", evaluate);

