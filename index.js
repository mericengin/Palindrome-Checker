const userInputField = document.getElementById("wordInput");
const checkBtn = document.getElementById("checkBtn");
const resultText = document.getElementById("resultText");

function checkPalindrome(string) {
    string = userInputField.value.trim().toLowerCase();
    
    if(string === "") {
        resultText.textContent = "Please type in a Word!";
        return;
    }

    const reversedString = string.toLowerCase().split('').reverse().join('');

    if(reversedString === string) {
        resultText.textContent = `${string} is a Palindrome!`;
    }
    else {
        resultText.textContent = `${string} is not a Palindrome!`;
    }
}

checkBtn.addEventListener("click", checkPalindrome);

document.addEventListener("keydown", (event) => {
    if(event.key === 'Enter') {
        checkPalindrome();
    }
});