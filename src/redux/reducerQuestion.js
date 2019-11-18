const defaultQuestion = {
    title: "Questão 99",
    category: "Narrativa",
    text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
    alternatives: {
        "A": "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
        "B": "Megamen X: com o menino ciborgue",
        "C": "Witcher 3: Com o personagem principal sendo um caçador de monstros",
        "D": "Batman Arkham Knight: Com o personagem principal que combate o crime"
    }
}

const questions = {
    "narrativa" : {
        title: "Questão 1",
        category: "Narrativa",
        text: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: {
            "A": "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "B": "Megamen X: com o menino ciborgue",
            "C": "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "D": "Batman Arkham Knight: Com o personagem principal que combate o crime"
        }
    },
    "tecnologia" : {
        title: "Questão 2",
        category: "Tecnologia",
        text: "Em Overwatch toda vez que um personagen usa uma habilidade ultimate, ele fala uma frase que pode ser ouvida por todos os jogadores no mapa, isso é um exemplo de mecânica acessível?",
        alternatives: {
            "A": "Sim, para todos os casos",
            "B": "Não",
            "C": "Somente para alguns casos",
            "D": "Não tenho certeza"
        }
    },
    
}
export const reducerQuestion = function (state = defaultQuestion, action) {
    let currentQuestion = {}

    if (action.type === "UPDATE_QUESTION_TYPE"){
        Object.assign(currentQuestion, questions[action.payload.category])
        return currentQuestion;
      }

    return questions['narrativa'];
}