var firstNumber = document.getElementById('firstNumber')
var secondNumber = document.getElementById('secondNumber')

function add(){
  var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt + secondNumberInt;
  document.getElementById("result").innerHTML = result;
}

function substract(firstNumberInt,secondNumberInt){
var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt - secondNumberInt;
  document.getElementById("result").innerHTML = result;
}

function multipy(firstNumberInt,secondNumberInt){
var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt * secondNumberInt;
  document.getElementById("result").innerHTML = result;
}


function divide(firstNumberInt,secondNumberInt){
var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt / secondNumberInt;
  document.getElementById("result").innerHTML = result;
}