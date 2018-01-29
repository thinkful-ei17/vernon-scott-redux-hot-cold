// export const SET_LANGUAGE = null;
// export const setLanguage = null;

export const initialState = {
    currentGuess: '',
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
  };

export const MAKE_GUESS = 'MAKE_GUESS';

export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess,
})

export const RESET_GAME = 'RESET_GAME';

export const resetGame = () => ({
    type: RESET_GAME,
    newAnswer: Math.floor(Math.random() * 100) + 1
})
