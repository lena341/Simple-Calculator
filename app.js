const values = {input1:null, operator:null, displayNumber:"0", nextInput:false};

function displayOutput()
{
   const output = document.querySelector(".calculator-screen");
   output.value = values.displayNumber;
}

function insertNumber(number)
{
    const {displayNumber, nextInput} = values;
    if(nextInput === true)
    {
      values.displayNumber = number;
      values.nextInput = false;
    }
    else
    {
      values.displayNumber = displayNumber === "0" ? number : displayNumber + number; 
    }
    console.log(values);
}

function operators(nextOperator)
{
   const {input1, operator, displayNumber} = values;
   const inputValue = displayNumber;
   if(operator && values.nextInput === true)
   {
      values.operator = nextOperator; //Η τιμη του τελεστη ισουται με την τιμη του νεου τελεστη σε περιπτωση που ο χρηστης θελει αλλο τελεστη
      console.log(values);
      return;
   }
   else if(input1 === null && !isNaN(inputValue))
   {
      values.input1 = inputValue;
   }
   else if(operator)
   {
      const result = calculate(input1, inputValue, operator);
      values.displayNumber = result;
      values.input1 = result;
   }
   values.nextInput = true;
   values.operator = nextOperator;
   console.log(values);
}

function calculate(input1, input2, operator)
{
   if(operator === "+")
     return input1 + input2;
   else if(operator === "-")
     return input1 - input2;
   else if(operator === "*")
     return input1 * input2;
   else if(operator === "/")
     return input1 / input2;
   else if(operator === "=")
     return input2;
}

function squareRoot()
{
   return values.displayNumber = Math.sqrt(values.displayNumber);
}

function percentage()
{
   return values.displayNumber = values.displayNumber / 100;
}

function decimal(dot)
{
   if(values.nextInput === true)
   {
      values.displayNumber = "0.";
      values.nextInput =false;
   }
   else if(!values.displayNumber.includes(dot))
     values.displayNumber += dot;
}

function resetValues()
{
   values.displayNumber = "0";
   values.input1 = null;
   values.operator = null;
   values.nextInput = false;
}

displayOutput();

const calcKeys = window.document.querySelector(".calculator-keys");
calcKeys.addEventListener("click", showKeys, false);

function showKeys(ev)
{
   const target = ev.target;
   if(target.classList.contains("operator"))
   {
      operators(target.value);
      displayOutput();
      return;
   }
   else if(target.classList.contains("number"))
   {
      insertNumber(target.value);
      displayOutput();
      return;
   }
   else if(target.classList.contains("result"))
   {
      operators(target.value);
      displayOutput();
      return;
   }
   else if(target.classList.contains("decimal"))
   {
      decimal(target.value);
      displayOutput();
      return;
   }
   else if(target.classList.contains("reset"))
   {
      resetValues();
      displayOutput();
      return;
   }
   else if(target.classList.contains("square-root"))
   {
      squareRoot();
      displayOutput();
      return;
   }
   else if(target.classList.contains("percent"))
   {
      percentage();
      displayOutput();
      return;
   }
}