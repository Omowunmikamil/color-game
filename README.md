# Stage 1 - Frontend Intern Task: Color Game

## Task Requirements

**Languages**

- React

## Game Requirements

**Color Display:**

- Display a box with a randomly selected color, which serves as the target color for the game.

- Attribute: data-testid="colorBox"

**Color Options:**

- Display 6 color buttons, each representing a potential guess for the target color.

- Each button should have a background color corresponding to a possible guess.

- Attribute: data-testid="colorOption"

**Game Instructions:**

- Display a message explaining the goal of the game (e.g., "Guess the correct color!").

- Attribute: data-testid="gameInstructions"

**Game Status:**

- After each guess, display whether the guess is correct or wrong.

- Attribute: data-testid="gameStatus"

**Score:**

- Display a score counter that increments for each correct guess.

- Track the highest score achieved in the session.

- Attribute: data-testid="score"

- Attribute: data-testid="highestScore"

**Timer:**

- Display a countdown timer that starts at 30 seconds and decreases every second.

- When the timer reaches zero, the game ends.

- Attribute: data-testid="timer"

**New Game Button:**

- Include a button to reset the game and start a new round.

- Attribute: data-testid="newGameButton"

## Styling and Design

- The game should have an engaging and user-friendly interface.

- Buttons should be large and easy to click.

- Use contrasting colors to differentiate between the target color and the options.

- Use CSS for animations when showing game results (e.g., fade-out effect for wrong answers or celebration for correct ones).

- The design must be responsive and adapt to various screen sizes (desktop, tablet, mobile).

## Functionality

- Randomly select a color from a predefined set and display it as the target color.

- Implement functionality for the player to click on the color buttons and check if they guessed correctly.

- Dynamically update the score, highest score, and display messages based on the player’s guesses.

- Ensure that the new game button correctly resets the game to its initial state.

- Implement a countdown timer that ends the game when it reaches zero.

**Implementation Details:**

- The player will not see a hex code; they will only see the color itself.

- The six color options will also have background colors, and the player must select the one that matches the colorBox.

## Acceptance Criteria

**Content:**

- All required elements are present and functional.

- The color guessing game displays the correct game instructions, status, score, and timer.

- The data-testid attributes are correctly implemented for testing purposes.

**Design:**

- The game is visually appealing, with a clear distinction between the target color and options.

- The design is responsive and works well across desktop, tablet, and mobile devices.

**Functionality:**

- The game correctly updates the score and game status after each guess.

- The new game button resets the game.

- The timer counts down correctly and stops the game when it reaches zero.

**Code Quality:**

- The code is well-organized, readable, and properly indented.

- Proper use of JavaScript functions, state management, and event handling.

## My Solution

Created a color game using React and TailwindCSS and hosted it on Netlify.

Play it [here!](https://https://hng12-color-game.netlify.app/)
