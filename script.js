function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){return "nice try :)"}
    return a / b;
}

function operate(op, a, b){
    switch (op){
        case "+": return add(a, b)

        case "-": return subtract(a, b)

        case "*": return multiply(a, b)

        case "/": return divide(a, b)
    }
}

let inputNum1 = []
let inputNum2 = []
let finalClear = false;

let inputs = {
    num1: inputNum1,
    operator: null,
    num2: inputNum2,
}



const display = document.querySelector(".display")
const opDisplay = document.querySelector(".opDisplay")
const clearBtn = document.querySelector(".clear")
const numBtns = document.querySelectorAll(".num")
const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const equalsBtn = document.querySelector(".equals")

clearBtn.addEventListener("click", ()=>{
    inputNum1.length = 0;
    inputs.operator = null;
    inputNum2.length = 0;
    display.textContent = null;
    opDisplay.textContent = ""
})

numBtns.forEach(num =>{
    num.addEventListener("click", function(){
        if(finalClear === true){
           inputNum1.length = 0;
           finalClear = false;
        }
        if(inputs.operator === null){
            inputNum1.push(Number(this.textContent))
            display.textContent = inputNum1.join("")
        }
        else{
            inputNum2.push(Number(this.textContent))
            display.textContent = inputNum2.join("")
        }
    } )
})

addBtn.addEventListener("click", ()=>{
    if(finalClear === true){ finalClear = false;}
    if(inputs.operator === null){
    inputs.operator = "+"
    opDisplay.textContent = inputs.operator
    }
    else{
        let result = operate(inputs.operator, Number(inputNum1.join("")), Number(inputNum2.join("")))
        display.textContent = result;
        inputNum1 = [result]
        inputs.operator = "+";
        opDisplay.textContent = inputs.operator
        inputNum2.length = 0;
    }
})

subtractBtn.addEventListener("click", ()=>{
    if(finalClear === true){ finalClear = false;}
    if(inputs.operator === null){
    inputs.operator = "-"
    opDisplay.textContent = inputs.operator
    }
    else{
        let result = operate(inputs.operator, Number(inputNum1.join("")), Number(inputNum2.join("")))
        display.textContent = result;
        inputNum1 = [result]
        inputs.operator = "-";
        opDisplay.textContent = inputs.operator
        inputNum2.length = 0;
    }
})

multiplyBtn.addEventListener("click", ()=>{
    if(finalClear === true){ finalClear = false;}
    if(inputs.operator === null){
    inputs.operator = "*"
    opDisplay.textContent = inputs.operator
    }
    else{
        let result = operate(inputs.operator, Number(inputNum1.join("")), Number(inputNum2.join("")))
        display.textContent = result;
        inputNum1 = [result]
        inputs.operator = "*";
        opDisplay.textContent = inputs.operator
        inputNum2.length = 0;
    }
})

divideBtn.addEventListener("click", ()=>{
    if(finalClear === true){ finalClear = false;}
    if(inputs.operator === null){
    inputs.operator = "/"
    opDisplay.textContent = inputs.operator
    }
    else{
        let result = operate(inputs.operator, Number(inputNum1.join("")), Number(inputNum2.join("")))
        display.textContent = result;
        inputNum1 = [result]
        inputs.operator = "/";
        opDisplay.textContent = inputs.operator
        inputNum2.length = 0;
    }
})

equalsBtn.addEventListener("click", ()=>{
    let result = operate(inputs.operator, Number(inputNum1.join("")), Number(inputNum2.join("")))
    display.textContent = result;
    opDisplay.textContent = "";
    inputNum1 = [result];
    inputs.operator = null;
    inputNum2.length = 0;
    finalClear = true;
})