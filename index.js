const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];

let displayWord = document.querySelector(".displayWord");
let userInput = document.getElementById("user-input");
const btn = document.querySelector(".btn");

const randomElement = words[Math.floor(Math.random() * words.length)];
console.log(randomElement);
for(let i = 0; i < randomElement.length; i++){
    displayWord.textContent += "_ ";
}

let guessLetters = [];


function checkLetters(){

    if(!userInput || userInput === ""){
        alert("You need to enter a valid user input.")
        return;
    }

    if(guessLetters.includes(userInput.value)){
        userInput.value = ""
        alert("This letter already exist in the list.");
        return;
    }
    
    guessLetters.push(userInput.value);
    userInput.value = "";
    let updatedWords = "";
    let allGuessed = true;
    let correctAnswer = []

    for(let i = 0; i < randomElement.length; i++){
        if(guessLetters.includes(randomElement[i])){
            updatedWords += randomElement[i] + " ";
            correctAnswer.push(randomElement[i]);
        }else{
            updatedWords +="_ "
            allGuessed = false
        }
    }

    displayWord.textContent = updatedWords;

    if(randomElement.length === correctAnswer.length){
        alert(`🎄Great Job! You have guessed the correct work: ${randomElement}`);
    }
}

btn.addEventListener("click", checkLetters);