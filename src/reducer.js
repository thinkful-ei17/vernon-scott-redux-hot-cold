import {SET_GUESSES, initialState, CURRENT_GUESS} from './action';

export default function reducer(state=initialState, action){
    if(action.type === SET_GUESSES){
        return Object.assign({}, state, {
            guesses: action.guesses
        })
    }else if (action.type === CURRENT_GUESS){
        return Object.assign({}, state, {
            currentGuess: action.guess
        })
    }
    return state;
}

