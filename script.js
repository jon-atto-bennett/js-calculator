var input = "";
var sum = [];
var newNum = false;

function submitNum(num) {
  if(newNum) {
    input = "";
  }
input = input + num;
document.myCalculator.display.value=input;
newNum=false;
};

function submitOperator(op) {

    sum.push(input);
    sum.push(op);
    newNum = true;
    getResult(sum);

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
      document.myCalculator.display.value=total;
    }
    else if (op==="-"){
      total = parseFloat(total) - parseFloat(nextNum);
      console.log(total);
  }
  else if (op==="*"){
    total = parseFloat(total) * parseFloat(nextNum);
    console.log(total);
}
  else if (op==="/"){
  total = parseFloat(total) / parseFloat(nextNum);
  console.log(total);
}

}

  document.myCalculator.display.value=total;
}


function clearDisplay(){
input = "";
sum =[];
equate=false;
document.myCalculator.display.value = input;
}
