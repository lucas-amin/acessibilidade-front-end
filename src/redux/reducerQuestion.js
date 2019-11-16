const defaultQuestion = {
    title: "Question 1",
    category: "Mechanics",
    text: "What is a inclusive mechanic?",
    alternatives: {
        "A": "Alternative A",
        "B": "Alternative B",
        "C": "Alternative C",
        "D": "Alternative D"
    }
}

export const reducerQuestion = function (state = defaultQuestion, action) {
    let currentQuestion = {
        title: "Question 1",
        category: "Mechanics",
        text: "What is a inclusive mechanic?",
        alternatives: {
            "A": "Alternative A",
            "B": "Alternative B",
            "C": "Alternative C",
            "D": "Alternative D"
        }
    }

    if (action.type === "2") {
        currentQuestion.title = "Question 2";
        console.log("i actually did it 2")
    } else if (action.type === "3") {
        currentQuestion.title = "Question 3";
        console.log("i actually did it 3")
    } else {
        currentQuestion.title = "Question 4";
    }

    return currentQuestion;
}