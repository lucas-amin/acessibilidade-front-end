let currentQuestionIndex = 0;
let currentQuestionCategory = 'narrativa';

const questions = {
    "narrativa" : [{
        title: "Questão 1",
        category: "Narrativa",
        text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: [
            "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "Megamen X: com o menino ciborgue",
            "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "Batman Arkham Knight: Com o personagem principal que combate o crime"
        ]
    },{
        title: "Questão 2",
        category: "Narrativa",
        text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: [
            "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "Megamen X: com o menino ciborgue",
            "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "Batman Arkham Knight: Com o personagem principal que combate o crime"
        ]
    }],
    "tecnologia" : [{
        title: "Questão 2",
        category: "Tecnologia",
        text: "Em Overwatch toda vez que um personagem usa uma habilidade ultimate, ele fala uma frase que pode ser ouvida por todos os jogadores no mapa, isso é um exemplo de mecânica acessível?",
        alternatives: [
            "Sim, para todos os casos",
            "Não",
            "Somente para alguns casos",
            "Não tenho certeza"
        ]
    }],
}

let currentQuestion = questions['narrativa'][0]
currentQuestion['currentIndex'] = 0
currentQuestion['questionsLength'] = questions['narrativa'].length

export const reducerQuestion = function (state = currentQuestion, action) {
    if (action.type === "UPDATE_QUESTION_TYPE"){
        currentQuestionIndex = 0;
        currentQuestionCategory = action.payload.category;
        Object.assign(currentQuestion, questions[action.payload.category][currentQuestionIndex])
        currentQuestion['currentIndex'] = currentQuestionIndex
        currentQuestion['questionsLength'] = questions[currentQuestionCategory].length
        return currentQuestion;
      }

      if (action.type === "UPDATE_NEXT_QUESTION"){
        currentQuestionIndex++;
        Object.assign(currentQuestion, questions[currentQuestionCategory][currentQuestionIndex])
        currentQuestion['currentIndex'] = currentQuestionIndex
        currentQuestion['questionsLength'] = questions[currentQuestionCategory].length
        return currentQuestion;
      }

    return currentQuestion;
}