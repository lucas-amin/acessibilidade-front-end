import {reducerQuestion} from './reducerQuestion'
import {reducerLearning} from './reducerLearning'

import {combineReducers, createStore} from 'redux'

const reducers = combineReducers({  
  currentQuestion: reducerQuestion,
  currentConcept: reducerLearning
})

const store = createStore(reducers)

store.subscribe( () => {
  console.log('state\n', store.getState());
  var test = store.getState()
  
  //debugger;
});

export default store
