// export const SET_LANGUAGE = null;
// export const setLanguage = null;

export const initialState = {
    currentGuess: '',
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
  };

export const SET_GUESSES = 'SET_GUESSES';

export const setGuesses = (guesses) => ({
      type: SET_GUESSES,
      guesses,
  });

export const CURRENT_GUESS = 'CURRENT_GUESS';

export const setCurrentGuess = (guess) => ({
    type: CURRENT_GUESS,
    guess,
}) 



