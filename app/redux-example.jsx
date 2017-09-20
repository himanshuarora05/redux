var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:

  }
}

var store = redux.createStore(reducer);
var currentState = store.getState();

console.log(currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Himanshu'
});
console.log(store.getState());
