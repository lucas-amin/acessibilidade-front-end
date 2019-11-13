import {reducerQuestion} from './reducerQuestion'
import {reducerLearning} from './reducerLearning'
import {reducerQuestions} from './reducerQuestions'

import {combineReducers, applyMiddleware, createStore} from 'redux'

const reducers = combineReducers({  
  currentQuestion: reducerQuestion,
  currentConcept: reducerLearning,
  questions: reducerQuestions
})

export default createStore(reducers)
