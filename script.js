var input = "";
var sum = [];
var newNum = false;
var equate = false;

function submitNum(num) {
  if(newNum) {
    input = "";
  }
input = input + num;
document.myCalculator.display.value=input;
newNum=false;
};

function submitOperator(op, equate) {
  if(equate!=true){
    sum.push(input);
    sum.push(op);
    newNum = true;
  }
  else {
    sum.push(input);
    getResult(sum);

  }

    }

function getResult(){
  // sum.push(input);
  var finalSum = 0;
  for(i=0; i<sum.length; i++) {
    var element = sum[i];
    switch(element) {
      case "+":
      finalSum = finalSum + 0;
        break;
      case "-":
      finalSum = finalSum - 0;
        break;
default:
        finalSum = finalSum + Number(sum[i]);
        break;


    }
  }
  document.myCalculator.display.value=finalSum;
  equate=false;
}

function clearDisplay(){
input = "";
sum =[];
equate=false;
document.myCalculator.display.value = input;
}
