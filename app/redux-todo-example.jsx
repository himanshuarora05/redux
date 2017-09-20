var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText:'',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    default:

  }
  return state;
}

var store = redux.createStore(reducer);
console.log(store.getState());

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "work"
}

store.dispatch(action);
console.log(store.getState());
