<h1>Retroactive Snake Game</h1>
<h2>Overview</h2>
<p>This is a retro-style Snake game built using the HTML5 Canvas API. Experience the classic arcade game with a minimalistic and clean design. The game is designed to provide a nostalgic experience with smooth graphics and responsive controls.</p>

<h2>Features</h2>
<ol>
  <li><strong>Classic Gameplay: </strong>Control the snake using arrow keys, eat food to grow, and avoid collisions.</li>
  <li><strong>Canvas Rendering: </strong>Smooth and efficient rendering using the Canvas API.</li>
  <li><strong>Responsive Design: </strong>Styled with CSS for a consistent look and feel across devices.</li>
  <li><strong>Score Tracking: </strong>Real-time score display with a reset button to restart the game.</li>
</ol>

<h2>How to Play</h2>
  <ol>
      <li><strong>Control the Snake:</strong> Use the arrow keys on your keyboard to navigate the snake.</li>
      <li><strong>Eat Food:</strong> The snake grows each time it eats food. The score increases with each piece of food consumed.</li>
      <li><strong>Avoid Collisions:</strong> The game ends if the snake collides with the wall or itself.</li>
      <li><strong>Reset the Game:</strong> Click the "Reset" button to start a new game.</li>
  </ol>

<h2>JavaScript Functions</h2>
<ol>
    <li><strong>gameStart()</strong>: Initializes and starts the game loop.</li>
    <li><strong>nextTick()</strong>: Main game loop that updates the game state and redraws the board.</li>
    <li><strong>clearBoard()</strong>: Clears the game board for redrawing.</li>
    <li><strong>createFood()</strong>: Randomly places food on the board.</li>
    <li><strong>drawFood()</strong>: Draws the food on the board.</li>
    <li><strong>moveSnake()</strong>: Moves the snake and checks for food consumption.</li>
    <li><strong>drawSnake()</strong>: Draws the snake on the board.</li>
    <li><strong>changeDirection()</strong>: Changes the snake's direction based on keyboard input.</li>
    <li><strong>checkGameOver()</strong>: Checks for game over conditions (collisions).</li>
    <li><strong>displayGameOver()</strong>: Displays a "GAME OVER" message when the game ends.</li>
    <li><strong>resetGame()</strong>: Resets the game to its initial state.</li>
</ol>
