const defaultQuestion = {
    title: "Questão 1",
    category: "Narrativa",
    text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
    alternatives: {
        "A": "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
        "B": "Megamen X: com o menino ciborgue",
        "C": "Witcher 3: Com o personagem principal sendo um caçador de monstros",
        "D": "Batman Arkham Knight: Com o personagem principal que combate o crime"
    }
}

export const reducerQuestion = function (state = defaultQuestion, action) {
    let currentQuestion = {
        title: "Questão 1",
        category: "Narrativa",
        text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: {
            "A": "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "B": "Megamen X: com o menino ciborgue",
            "C": "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "D": "Batman Arkham Knight: Com o personagem principal que combate o crime"
        }
    }

    if (action.type === "2") {
        currentQuestion.title = "Questão 2";
        console.log("i actually did it 2")
    } else if (action.type === "3") {
        currentQuestion.title = "Questão 3";
        console.log("i actually did it 3")
    } else {
        currentQuestion.title = "Questão 4";
    }

    return currentQuestion;
}