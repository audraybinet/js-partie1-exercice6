function divise(){
var firstNumber= document.getElementById('firstNumber').value;
firstNumber= Math.trunc(firstNumber);
var secondNumber= document.getElementById('secondNumber').value;
alert(firstNumber % secondNumber);
}
