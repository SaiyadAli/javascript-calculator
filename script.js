
let firstNum=0;
let operator =0;

const bclick = (val)=>
{
  if(Number(val)|| val=="0")
  {
  document.getElementById("screen").value+=val;
  }
  else
  {
    firstNum =Number(document.getElementById("screen").value);
    operator =val;
    bClear();
    console.log(`first Num is ${firstNum}`);
    console.log(`operator is ${operator}`);
  }
}

const bClear = ()=>
{
    document.getElementById("screen").value="";
}

const equalClick = ()=>
{
      let secondNum = Number(document.getElementById("screen").value);
      var result;
      switch (operator)
      {
        case '+':
             result=firstNum+secondNum;
             break;
        case '*':
            result=firstNum*secondNum;
            break;
        case '/':
            result=firstNum/secondNum;
            break;
        case '-':
            result=firstNum-secondNum;
            break;
      }



      document.getElementById('screen').value=result;

}