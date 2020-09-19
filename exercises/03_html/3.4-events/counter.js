const minNum = -5;
const maxNum = 5; 
const currentNum = document.getElementById("counter");

document.getElementById("reset").addEventListener("click", () => {
    currentNum.innerHTML = "0";
});

document.getElementById("decrement").addEventListener("click", ()=> {
    var currentNumInt = Number.parseInt(currentNum.innerText, 10);
    if (currentNumInt == minNum) {
        currentNum.innerHTML = maxNum;
        console.log(currentNumInt);
    } else {
        currentNumInt = currentNumInt - 1;
        currentNum.innerHTML = currentNumInt;
        console.log('hello');
    }  
});

document.getElementById("increment").addEventListener("click", () => {
    var currentNumInt = Number.parseInt(currentNum.innerText, 10);
    if (currentNumInt == maxNum) {
        currentNum.innerHTML = minNum;
        console.log('a');
    } else {
        currentNumInt = currentNumInt + 1;
        currentNum.innerHTML = currentNumInt;
        console.log('b');
    };
});
