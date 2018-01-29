import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import store from './store';
import Game from './components/game';
import {makeGuess, resetGame} from './action';


console.log('before dispatch', store.getState());

store.dispatch(makeGuess(20));

console.log('after makeGuess', store.getState());

store.dispatch(resetGame());

console.log('after resetGame:', store.getState());

ReactDOM.render(
  <Game />,//store={store}/>,
  document.getElementById('root')
);

// import store from './store';

// import {addItem, updateItem, deleteItem} from './actions';

// store.dispatch(addItem({id: 0, name: 'Foo'}));
// store.dispatch(addItem({id: 1, name: 'Bar'}));
// store.dispatch(addItem({id: 2, name: 'Baz'}));

// store.dispatch(updateItem({id: 0, name: 'Food'}));
// store.dispatch(updateItem({id: 1, name: 'Bard'}));
// store.dispatch(updateItem({id: 2, name: 'Bash'}));

// store.dispatch(deleteItem({id: 1}));
