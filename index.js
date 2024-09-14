// Declaring variables
const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const startBtn = document.querySelector("#startBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "tomato";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

// Creates Snake Body
let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize * 1, y: 0},
    {x: 0, y: 0}
]

// Event listeners to use arrow keys to move snake, and to reset game
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

// Starts the game
gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

// Moving the snake and using all functions to do so
function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    }
    else {
        displayGameOver();
    }
};

// Clears the board
function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
};

// Randomizes where food is placed
function createFood(){
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);

    console.log(foodX);
};

// Draws the food
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};

// Moving the snake
function moveSnake(){
    const head = {x: snake[0].x + xVelocity, 
                  y: snake[0].y +  yVelocity};
    snake.unshift(head);
    // if the food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else {
        snake.pop();
    }
};

// Creating snake with canvasAPI
function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);

    })
};

// Using keys to move the snake
function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUP = (yVelocity == -unitSize);
    const goingDOWN = (yVelocity == unitSize);
    const goingRIGHT = (xVelocity == unitSize);
    const goingLEFT = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRIGHT):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDOWN):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLEFT):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUP):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }

    console.log(keyPressed);
};

// Checking if the snake touched the edges or itself
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

function displayGameOver(){
    context.font = "50px Poppins";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x: unitSize * 4, y: 0},
        {x: unitSize * 3, y: 0},
        {x: unitSize * 2, y: 0},
        {x: unitSize * 1, y: 0},
        {x: 0, y: 0}
    ];
    gameStart();
};