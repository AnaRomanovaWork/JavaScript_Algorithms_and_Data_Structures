const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result =document.getElementById('result');


//function to clean user input
function cleanUserInput(str) {
   const regex = /[^a-z0-9]/g;
   return str.replace(regex,"");
}

function isInvalidInput(str) {
    return str.trim() === "";
}

const palindromeChecker = () => {
    const original = userInput.value;
    if (isInvalidInput(userInput.value)){
        alert("Please input a value");
        result.innerText ="Please input a value";
        userInput.value = "";
        return;
    }
    
    const cleanInput = cleanUserInput(userInput.value.toLowerCase());
    
    for (let i = 0, j = cleanInput.length - 1; i < j; i++, j--){
        if (cleanInput[i] !== cleanInput[j]) {
            result.innerText = `${original} is not a palindrome`;
            userInput.value = "";
            return;
        }
    }
    result.innerText = `${original} is a palindrome`;
    userInput.value = "";

}

checkBtn.addEventListener("click", palindromeChecker);