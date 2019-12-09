/*
 * action types
 */

export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const UPDATE_CONCEPT = 'UPDATE_CONCEPT'

/*
 * action creators
 */

export function setCurrentQuestion(text) {
  return { type: UPDATE_QUESTION, text }
}

export function setCurrentQuestionType(category) {
  return { 
    type: 'UPDATE_QUESTION_TYPE',
    payload: {
      category: category
    }
  }
}

export function setNextQuestion(correct_alternative) {
  debugger
  if(correct_alternative){
    debugger
    return { 
      type: 'UPDATE_NEXT_QUESTION',
      payload: {}
    }
  } else{
    debugger
    return { 
      type: 'INCORRECT_ALTERNATIVE_UPDATE_NEXT_QUESTION',
      payload: {}
    }
  }

}

// Concept actions

export function setCurrentConcept(concept) {
  return { type: UPDATE_CONCEPT, concept: concept }
}

export function setCurrentConceptExample() {
  return { type: 'UPDATE_CONCEPT_EXAMPLE' }
}


export function setCurrentConceptType(category) {
  return { 
    type: 'UPDATE_CONCEPT_TYPE',
    payload: {
      category: category
    }
  }
}
