// game.js

function getColor(number) {
    if (number % 2 === 0) {
        return 'red';
    } else {
        return 'green';
    }
}

function createNumberElement(number, color) {
    const element = document.createElement('div');
    element.classList.add('number', color);
    element.textContent = number;
    return element;
}

function initializeGame() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = '';

    let winColor = determineWinningColor();
    let specialCase = determineSpecialCase();

    for (let i = 0; i < 10; i++) {
        let color;
        if (specialCase && (i === 0 || i === 5)) {
            color = (i === 0 ? 'violet' : 'green');
        } else {
            color = getColor(i);
        }
        
        if (Math.random() < 0.5) {
            color = winColor;
        }

        const numberElement = createNumberElement(i, color);
        gameContainer.appendChild(numberElement);
    }
}

function determineWinningColor() {
    // 50% chance for red or green
    return Math.random() < 0.5 ? 'red' : 'green';
}

function determineSpecialCase() {
    // 20% chance for special case every 5 times
    return Math.random() < 0.2;
}

// Add event listener for user bet selection
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();

    // Add user bet selection and validation logic
    const betButton = document.createElement('button');
    betButton.textContent = 'Place Bet';
    document.body.appendChild(betButton);

    betButton.addEventListener('click', () => {
        let userBet = parseInt(prompt("Enter your bet number (0-9):"));
        
        if (isNaN(userBet) || userBet < 0 || userBet > 9) {
            alert("Invalid bet! Please enter a number between 0 and 9.");
            return;
        }

        let evenChance = Math.random() < 0.1;
        if (evenChance && userBet % 2 !== 0) {
            alert("You must select an even number.");
        } else if (!evenChance && userBet % 2 === 0) {
            alert("You must select an odd number.");
        } else {
            alert("Bet accepted!");
        }

        initializeGame();
    });
});
