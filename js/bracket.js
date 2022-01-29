let inputshow = document.getElementById("inputid");
let typeinput = document.getElementById("typeinputid");
let outputshow = document.getElementById("outputid");
let answer = document.getElementById("answer");
let shift = document.getElementById("switch");

let equation = new Array();

function showinput() {
  let html = ``;
  equation.forEach((element) => {
    html += element;
  });
  inputshow.innerText = html;
}

function takeinput() {
  equation = new Array();
  let html = typeinput.value;
  for (i = 0; i < html.length; i++) {
    equation.push(html[i]);
  }
  showinput();
  res();
}

function Clearone() {
  equation.pop();
  showinput();
}

function ClearAll() {
  equation = new Array();
  showinput();
}

function getelement(e) {
  equation.push(e);
  showinput();
  // console.log(equation);
}

function res() {
  if (equation.length == 0) {
    return;
  }
  let html = ``;
  // console.log(equation);
  let check = true;
  while (check) {
    let n = equation.length;
    let i, j;
    for (i = n - 1; i >= 0; i--) {
      if (equation[i] === "{" || equation[i] === "(" || equation[i] === "[") {
        check = true;
        break;
      } else {
        check = false;
      }
    }
    if (check) {
      for (j = i + 1; j < n; j++) {
        if (equation[i] === "{" && equation[j] === "}") {
          break;
        }
        if (equation[i] === "[" && equation[j] === "]") {
          break;
        }
        if (equation[i] === "(" && equation[j] === ")") {
          break;
        }
      }
      let subeq = new Array();
      let k;
      let stringnew = `<li class="mainline">`;
      for (var pos = 0; pos <= i; pos++) {
        stringnew += equation[pos];
      }
      stringnew += `<span class="des">`;
      for (k = i + 1; k < j; k++) {
        subeq.push(equation[k]);
        // fdsf
        stringnew += equation[k];
      }
      stringnew += `</span>`;

      for (var pos = j; pos < equation.length; pos++) {
        stringnew += equation[pos];
      }

      stringnew += `</li>`;

      // 
      let left=0,right=0;
      if(i>0){
        if(equation[i-1]=='+' || equation[i-1]=='-' || equation[i-1]=='*' || equation[i-1]=='/' || equation[i-1] === "{" || equation[i-1] === "(" || equation[i-1] === "["){
          left=0;
        }else{
          left=1;
        }
      }
      if(j<equation.length-1){
        if(equation[j+1]=='+' || equation[j+1]=='-' || equation[j+1]=='*' || equation[j+1]=='/' || equation[j+1] === "}" || equation[j+1] === ")" || equation[j+1] === "]"){
          right=0;
        }else{
          right=1;
        }
      }
      let value = getarray(subeq);
      if(left && right){
        equation.splice(i, j - i-2);
        equation[i]="*";
        equation[i+1] = value[0].toString(10);
        equation[i+2] = "*";
      }else if(left){
        equation.splice(i, j - i-1);
        equation[i]="*";
        equation[i+1] = value[0].toString(10);
      }else if(right){
        equation.splice(i, j - i-1);
        equation[i] = value[0].toString(10);
        equation[i+1] = "*";
      }else{
        equation.splice(i, j - i);
        equation[i] = value[0].toString(10);
      }
      stringnew += `<ul class="partsol">${value[1]}</ul>`;
      html += stringnew;
    }
  }
  let value = getarray(equation);
    let string = `<li class="mainline"><span class="des">`;
  equation.forEach(e => {
      string += `${e}`;
  });
  string += `</span></li>`;
  string += `<ul class="partsol">${value[1]}</ul>`;
  string += `<li class="mainline">${value[0]}</li>`;
  html += string;
  outputshow.innerHTML = html;
  answer.innerHTML = `<p>Answer : ${value[0]}</p>`;
  shift.innerText=`Result`;
}
