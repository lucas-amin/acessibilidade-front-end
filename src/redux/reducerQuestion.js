let currentQuestionIndex = 0;
let currentQuestionCategory = 'narrativa';

const questions = {
    "narrativa" : [{
        title: "Questão 1",
        question: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: [
            "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "Megamen X: com o menino ciborgue",
            "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "Batman Arkham Knight: Com o personagem principal que combate o crime"
        ],
        "images": [{"url": "https://1.bp.blogspot.com/-xdhe5bh_PfU/XPpduTXkJ8I/AAAAAAAACzI/1RGl5P2JvE8FU4Q74aVh9T1aSp0KqBLGgCLcBGAs/s320/X_MMXLC1.png", "alt": "Megaman X: com o menino ciborgue"},{"url": "https://img.elo7.com.br/product/zoom/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg", "alt": "Batman o super herói"}, {"url": "https://www.writeups.org/wp-content/uploads/Joker-Mass-Effect-2-Jeff-Moreau-a.jpg", "alt": "Jeff 'Joker' Moreau - Personagem do jogo Mass Effect com síndrome que causa extrema fragilidade nos ossos"},{"url": "https://vignette.wikia.nocookie.net/witcher/images/a/a0/Tw3_Geralt_of_Rivia_newest_render.png/revision/latest?cb=20170606064646", "alt": "Witcher 3: Geralt of Rivia"}],
        "correct_answer": 0,
        "justify_answer": "A resposta correta é o jogo Mass Effect que apresenta e inclui pessoas com problemas de mobilidade por meio do personagem Jeff 'Joker' Moreau.",
    },
    {
        title: "Questão 2",
        question: "Qual desses personagens desses jogos tem elementos inclusivos em sua narrativa?",
        alternatives: [
            "Mass Effect: Com o personagem com a síndrome que causa extrema fragilidade nos ossos ",
            "Megamen X: com o menino ciborgue",
            "Witcher 3: Com o personagem principal sendo um caçador de monstros",
            "Batman Arkham Knight: Com o personagem principal que combate o crime"
        ],
        "images": [{"url": "https://1.bp.blogspot.com/-xdhe5bh_PfU/XPpduTXkJ8I/AAAAAAAACzI/1RGl5P2JvE8FU4Q74aVh9T1aSp0KqBLGgCLcBGAs/s320/X_MMXLC1.png", "alt": "Megaman X: com o menino ciborgue"},{"url": "https://img.elo7.com.br/product/zoom/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg", "alt": "Batman o super herói"}, {"url": "https://www.writeups.org/wp-content/uploads/Joker-Mass-Effect-2-Jeff-Moreau-a.jpg", "alt": "Jeff 'Joker' Moreau - Personagem do jogo Mass Effect com síndrome que causa extrema fragilidade nos ossos"},{"url": "https://vignette.wikia.nocookie.net/witcher/images/a/a0/Tw3_Geralt_of_Rivia_newest_render.png/revision/latest?cb=20170606064646", "alt": "Witcher 3: Geralt of Rivia"}],
        "correct_answer": 1,
        "justify_answer": "A resposta correta é o jogo Mass Effect que apresenta e inclui pessoas com problemas de mobilidade por meio do personagem Jeff 'Joker' Moreau.",
    }],
    "tecnologia" : [{
        title: "Questão 2",
        question: "Em Overwatch toda vez que um personagem usa uma habilidade ultimate, ele fala uma frase que pode ser ouvida por todos os jogadores no mapa, isso é um exemplo de mecânica acessível?",
        videos: [{"url":"https://www.youtube.com/embed/VW7MaCT4f24", "alt": "Ultimates dos personagens de overwatch"}],
        "justify_answer":"O jogo não fornece nenhuma alternativa para jogadores que não escutam, o que representa uma grande desvantagem",
        "correct_answer": 1 ,
        alternatives: [
            "Sim",
            "Não"
        ]
    }],
}

let currentQuestion = questions['narrativa'][0]
currentQuestion['currentIndex'] = 0
currentQuestion['questionsLength'] = questions['narrativa'].length
currentQuestion['category'] = currentQuestionCategory

export const reducerQuestion = function (state = currentQuestion, action) {
    if (action.type === "UPDATE_QUESTION_TYPE"){
        currentQuestion = {}
        currentQuestionIndex = 0;
        currentQuestionCategory = action.payload.category;
        Object.assign(currentQuestion, questions[action.payload.category][currentQuestionIndex])
        currentQuestion['currentIndex'] = currentQuestionIndex
        currentQuestion['questionsLength'] = questions[currentQuestionCategory].length
        currentQuestion['category'] = currentQuestionCategory
        return currentQuestion;
      }

      if (action.type === "UPDATE_NEXT_QUESTION"){
        currentQuestion = {}
        currentQuestionIndex++;
        Object.assign(currentQuestion, questions[currentQuestionCategory][currentQuestionIndex])
        currentQuestion['currentIndex'] = currentQuestionIndex
        currentQuestion['questionsLength'] = questions[currentQuestionCategory].length
        currentQuestion['category'] = currentQuestionCategory
        return currentQuestion;
      }

      if (action.type === "INCORRECT_ALTERNATIVE_UPDATE_NEXT_QUESTION"){
        // Re-inserting the question in the array since the user did not select the correct option
        debugger
        questions[currentQuestionCategory].push(questions[currentQuestionCategory][currentQuestionIndex])
        debugger
        currentQuestion = {}
        currentQuestionIndex++;
        Object.assign(currentQuestion, questions[currentQuestionCategory][currentQuestionIndex])
        currentQuestion['currentIndex'] = currentQuestionIndex
        currentQuestion['questionsLength'] = questions[currentQuestionCategory].length
        currentQuestion['category'] = currentQuestionCategory
        return currentQuestion;
      }

      
    return currentQuestion;
}