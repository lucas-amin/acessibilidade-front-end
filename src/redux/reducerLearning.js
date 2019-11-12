const defaultState = {
  title: "Question 12",
  category: "Mechanics",
  text: "What is a inclusive mechanic?"
};

export const reducerLearning = function(state = defaultState, action) {
  let currentConcept = {
    title: "Question 1",
    category: "Mechanics",
    text: "What is a inclusive mechanic?"
  };
    
  if (action.type == "INC") {
    console.log("inc");
    currentConcept.title = "Question 2";
  } else if (action.type == "DEC") {
    currentConcept.title = "Question 3";
    console.log("DEC");
  } else {
    currentConcept.title = "Question 4";
  }
  return currentConcept;
};
