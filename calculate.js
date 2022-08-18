class Calculator{
     add = (number1,number2) => number1+number2;
     subtract = (number1,number2) => number1-number2;
     divide = (number1,number2) => Math.floor(number1/number2);
     multiply = (number1,number2)=>number1*number2;
}

module.exports = Calculator;