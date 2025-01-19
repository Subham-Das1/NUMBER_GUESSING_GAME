let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;
let score = 100;
const maxAttempts = 6;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;

    if (userGuess === '') {
        document.getElementById('message').textContent = 'Please enter a number.';
        return;
    }

    userGuess = Number(userGuess);

    if (userGuess > 100 || userGuess < 0) {
        document.getElementById('message').textContent = 'Please enter a number between 0 and 100.';
        return;
    }

    attempts++;
    document.getElementById('attemptsLeft').textContent = `Attempts Left: ${maxAttempts - attempts}`;

    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        calculateScore();
        endGame();
    } else if (userGuess > randomNumber) {
        document.getElementById('message').textContent = 'The number is lower.';
    } else {
        document.getElementById('message').textContent = 'The number is higher.';
    }

    if (attempts === maxAttempts && userGuess !== randomNumber) {
        document.getElementById('message').textContent = 'YOU LOST THE GAME!';
        endGame();
    }
}

function calculateScore() {
    if (attempts === 1) score = 100;
    else if (attempts === 2) score = 85;
    else if (attempts === 3) score = 70;
    else if (attempts === 4) score = 50;
    else if (attempts === 5) score = 35;

    document.getElementById('score').textContent = `Score: ${score}`;
}

function endGame() {
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('userGuess').disabled = true;
    document.getElementById('restartBtn').style.display = 'inline';
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    score = 100;
    document.getElementById('message').textContent = '';
    document.getElementById('score').textContent = '';
    document.getElementById('attemptsLeft').textContent = `Attempts Left: ${maxAttempts}`;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('userGuess').disabled = false;
    document.getElementById('restartBtn').style.display = 'none';
    document.getElementById('userGuess').value = '';
}
