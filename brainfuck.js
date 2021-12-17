const code = document.getElementById("code");
const answer = document.getElementById("answer");
let loopStartingIndex = null;
let loopStartingpointer = null;
let brainFuckArray = [];
let index = 0;
let myBrainFuckedAnswer = ""
const calculateValue = () => {
  let data = code.value;
  if (data) {
    const split = data.split(" ");
    data = split.join("");
    startCalculation(data);
  } else {
    alert(`Input Is Empty`);
  }
};

const incrementCell = () => {
  index = index + 1;
};
const decrementCell = () => {
  if (index > 0) {
    index = index - 1;
  } else {
    alert("WRONG CODE!!");
  }
};
const incrementValue = () => {
  brainFuckArray[index] = (brainFuckArray[index] || 0) + 1;
};
const decrementValue = () => {
  brainFuckArray[index] = (brainFuckArray[index] || 0) - 1;
};
const printValue = () => {
    console.log(brainFuckArray[index])
  console.log(String.fromCharCode(brainFuckArray[index]))
  myBrainFuckedAnswer = myBrainFuckedAnswer+String.fromCharCode(brainFuckArray[index])
  console.log(myBrainFuckedAnswer)
};
const clearInput = () =>{
    code.value = ''
}
const startCalculation = (code) => {
  let length = code.length;
  let codeIndex = 0;
  while (codeIndex < length) {
    if (code[codeIndex] === ">") {
      incrementCell();
      codeIndex = codeIndex + 1;
    } else if (code[codeIndex] === "<") {
      decrementCell();
      codeIndex = codeIndex + 1;
    } else if (code[codeIndex] === "+") {
      incrementValue();
      codeIndex = codeIndex + 1;
    } else if (code[codeIndex] === "-") {
      decrementValue();
      codeIndex = codeIndex + 1;
    } else if (code[codeIndex] === "[") {
      loopStartingIndex = codeIndex;
      loopStartingpointer = index;
      codeIndex=codeIndex+1;
      console.log("loop statring")
    } else if (code[codeIndex] === "]") {
      if(brainFuckArray[loopStartingpointer]===0){
        console.log("loop ending")
        codeIndex=codeIndex+1;
      }
      else{
          codeIndex = loopStartingIndex;
      }
    } else if (code[codeIndex] === ".") {
      printValue();
      codeIndex = codeIndex + 1;
    }
  }
  answer.innerText = myBrainFuckedAnswer
  clearInput();
};
