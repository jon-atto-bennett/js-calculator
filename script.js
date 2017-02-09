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

  var total =sum[0];
  var op = "";
  var nextNum = 0;
  console.log(sum);
  for(i=1; i<sum.length-1; i=i+2){
    op = sum[i];
    nextNum = sum[i+1];
    if(op==="+"){
      total = parseFloat(total) + parseFloat(nextNum);
      console.log(total);
    }
  }
  document.myCalculator.display.value=total;
}
 // sum.push(input);
//   var finalSum = "";
//   for(i=0; i<sum.length; i++) {
//     var element = sum[i];
//     switch(element) {
//       case "+":
//       finalSum = finalSum + "+";
//         break;
//       case "-":
//       finalSum = finalSum - "-";
//         break;
// default:
//         finalSum = finalSum + sum[i];
//         break;



//   }
//   document.myCalculator.display.value=finalSum;
//   equate=false;
// }

function clearDisplay(){
input = "";
sum =[];
equate=false;
document.myCalculator.display.value = input;
}
