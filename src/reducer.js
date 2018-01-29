import {MAKE_GUESS, initialState, RESET_GAME} from './action';

export default function reducer(state=initialState, action){
    if(action.type === MAKE_GUESS){

      let guess = parseInt(action.guess, 10);

      if (isNaN(guess)) {
        return Object.assign({}, state, {
            feedback: 'Please enter a valid number'
        })
      }

      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }

      return Object.assign({}, state, {
          currentGuess: guess,
          feedback: feedback,
          guesses: [...state.guesses, guess]
      })

      //
      // // We typically wouldn't touch the DOM directly like this in React
      // // but this is the best way to update the title of the page,
      // // which is good for giving screen-reader users
      // // instant information about the app.
      // document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

    }else if (action.type === RESET_GAME){
        return Object.assign({}, state, {
          currentGuess: '',
          guesses: [],
          feedback: 'Make your guess!',
          auralStatus: '',
          correctAnswer: Math.floor(Math.random() * 100) + 1
        })
    }
    return state;
}
