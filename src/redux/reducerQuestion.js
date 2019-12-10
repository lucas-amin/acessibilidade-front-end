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
        question: "Olhe para os personagens atualmente disponíveis em Overwatch e responda: é um jogo que se preocupa em manter uma narrativa inclusiva?",
        alternatives: ["Sim","Não"],
       "correct_answer": 0 ,
       "images": [{"url": "https://sm.ign.com/ign_br/news/o/overwatch-/overwatch-3-year-anniversary-celebration-announced_sagv.jpg", "alt": "Personagens de Overwatch"}],
       "justify_answer": "Dentro de Overwatch existem muitos exemplos de personagens que tentam representar algumas minorias da sociedade. Um exemplo é o Lúcio que veio de uma favela do Rio de Janeiro, outro exemplo é a Tracer que faz parte do grupo LGBTQIA+"
       }
    ],
    "tecnologia" : [{
        title: "Questão 1",
        question: "Em Doom existe a opção de configuar o jogo para simular os vários tipos de daltonismo, isso é um exemplo de jogo que se preocupa com acessabilidade.",
        alternatives: ["Verdadeiro","Falso"],
       "correct_answer": 1 ,
       "videos":[{"url":"https://www.youtube.com/embed/TInXjMPZths", "alt": "Doom: Opção de simular os diversos tipos de daltonismo"}],
       "justify_answer":"Simular o daltonismo de forma alguma ajuda um jogador daltonico, essa funcionalidade acabou sendo alvo de chacota na industria dos games por estar dentro de um menu de acessibilidade"
        },
        {
        title: "Questão 2",
        question: "Em Overwatch toda vez que um personagem usa uma habilidade ultimate, ele fala uma frase que pode ser ouvida por todos os jogadores no mapa, isso é um exemplo de mecânica acessível?",
        "videos": [{"url":"https://www.youtube.com/embed/VW7MaCT4f24", "alt": "Ultimates dos personagens de overwatch"}],
        "justify_answer":"O jogo não fornece nenhuma alternativa para jogadores que não escutam, o que representa uma grande desvantagem",
        "correct_answer": 1 ,
        alternatives: ["Sim","Não"]
        },
        {
        title: "Questão 2",
        question: "Legendas são um tipo de tecnologia acessivel muito madura em jogos, com padrões bem estabelecidos",
        alternatives: ["Sim","Não"],
        "correct_answer": 1 ,
        "images": [{"url": "https://static.wixstatic.com/media/94eb77_db71cdafe94a4ab196c30d8958bf3042~mv2.jpg/v1/fill/w_777,h_437,al_c,q_90,usm_0.66_1.00_0.01/94eb77_db71cdafe94a4ab196c30d8958bf3042~mv2.webp", "alt": "Exemplo da legenda no jogo Wolfenstein II: The New Colossus"}],
        "justify_answer": "Para filmes a legenda é um tecnologia muito bem padronizada com regras definidas, porém para jogos não há nenhum padrão o que gera situações com letras muito pequenas, ou em tons que não tornam a legenda impossivel de ser lida."
        }],
    "regras": [{
        title: "Questão 1",
        question: "No jogo Spider-man (2018) é possivel desabilitar os quick time events (Momentos onde o jogador tem que apertar o mesmo botão várias vezes em um curto espaço de tempo), trocando-os por apenas segurar uma tecla. Isso é um exemplo de ______ inclusiva",
        alternatives: ["Regra","Mecânica","Narrativa","Tecnologia"],
        correct_answer: 0 ,
        videos: [{"url":"https://www.youtube.com/embed/wfBiGDcdA9M", "alt": "QTE's de Spider Man"}],
        justify_answer: "Regra, pois é uma condição de vitória que pode ser mudada em virtude da necessidade do jogador."
    },{
        title: "Questão 2",
        question: "O jogo Celeste possui um alto nível de dificuldade onde é necssário realizar ações rápidas, porém ele apresenta um menu de acessibilidade onde você pode controlar a dificuldade do jogo deixando essas ações mais simples, ou até mesmo gerando vidas infinitas. Isso é um exemplo de jogo com regras acessiveis?",
        alternatives: ["Sim","Não"],
        correct_answer: 0 ,
        images:[{"url":"http://gameaccessibilityguidelines.com/wp-content/uploads/2018/01/celeste3.jpg", "alt": "Menu de acessibilidade do jogo Celeste"}],
        justify_answer: "Deixar o usuário controlar as regras de forma que o jogo se torne uma experiencia agradavel independente das suas dificuldades é um exemplo de regra acessivel."
    },{
        title: "Questão 3",
        question: "Legendas são um tipo de tecnologia acessivel muito madura em jogos, com padrões bem estabelecidos",
        alternatives: ["Sim","Não"],
        correct_answer: 1 ,
        images:[{"url": "https://static.wixstatic.com/media/94eb77_db71cdafe94a4ab196c30d8958bf3042~mv2.jpg/v1/fill/w_777,h_437,al_c,q_90,usm_0.66_1.00_0.01/94eb77_db71cdafe94a4ab196c30d8958bf3042~mv2.webp", "alt": "Exemplo da legenda no jogo Wolfenstein II: The New Colossus"}],
        justify_answer: "Para filmes a legenda é um tecnologia muito bem padronizada com regras definidas, porém para jogos não há nenhum padrão o que gera situações com letras muito pequenas, ou em tons que não tornam a legenda impossivel de ser lida."
    }],
    "objetivos": [{
        title: "Questão 1",
        question: "O jogo Horizon Zero Dawn disponibiliza um menu de seleção dificuldade com multiplos niveis, sendo eles: Story, Easy, Normal, Hard and Very Hard; e em todos os esse niveis de dificuldade é possivel conseguir todos os achievement  do jogo. Mesmo archivments sendo considerados objetivos não necessários para compreenção do jogo, a opção de disponibilizar esse menu é uma forma de tornar os objetivos acessiveis?",
        alternatives: ["Sim", "Não"],
        correct_answer: 0 ,
        justify_answer: "Possibilitar o usuário decidir o quão dificil os objetivos (mesmo objetivos secundários) serão dentro do jogo tornam os objetivos acessiveis."
    },{
        title: "Questão 2",
        question: "No jogo God of War 3, há um achievement que é obtido quando o jogo é concluído na dificuldade 'god', que é o maior nível de dificuldade do jogo e exige que o jogador consiga desviar de ataques dos inimigos, e atacar com uma enorme agilidade, por causa disso o jogo apresenta objetivos não acessiveis?",
        alternatives: ["Sim, pois os jogadores deveriam ter a possibilidade de conseguir todos os objetivos do jogo independente das carateristicas dos jogadores","Não, pois achievements são objetivos secundários", "Não, pois achievement  não são objetivos do jogo" ],
        correct_answer: 0 ,
        justify_answer: "Possibilitar o usuário decidir o quão dificil os objetivos (mesmo objetivos secundários) serão dentro do jogo tornam os objetivos acessiveis e portanto o achievement citado não é um objetivo acessivel."
    }],
    "mecanicas": [{
        title: "Questão 1",
        question: "O jogo Hearthstone da empresa Blizzard é um jogo de cartas online, onde cada jogador escolhe seu conjunto de cartas e depois disputa contra outros jogadores. O turno para jogada dura um minuto e meio, nesse turno é necessário fazer escolha da estratégia e a movimenteção, onde essa movimentação é feita com o mouse. Dada essa descrição o jogo Hearthstone possuí mecanicas acessiveis?",
        alternatives: ["Sim", "Não"],
        correct_answer: 1 ,
        videos: [{"url": "https://www.youtube.com/embed/dYdlY935gCo?t=43", "alt": "Exemplo de gameplay do jogo Hearthstone"}],
        justify_answer: "Possibilitar o usuário decidir o quão dificil os objetivos (mesmo objetivos secundários) serão dentro do jogo tornam os objetivos acessiveis."
    }],
    "evas": [{
        title: "Questão 1",
        question: "O jogo Fortnite permite o jogador habilitar indicadores visuais de sons próximos desde que o audio seja completamente desabilitado, isso é um exemplo de ______ acessivel",
        alternatives:["Mecanica", "E.V.A.H","Objetivo","Tecnologia"],
        "correct_answer": 1,
        "videos": [{"url": "https://www.youtube.com/embed/OSA8c75FCI0", "alt": "Exemplo da feature do jogo Fortnite que permite visualizar os sons mediante o desligamento do audio do jogo"}],
        "justify_answer": "A resposta é E.V.A.H pelo carater de permitir trocar um sentido pelo outro"
    }]

    
}

let currentQuestion = questions['narrativa'][0]
currentQuestion['currentIndex'] = 0
currentQuestion['questionsLength'] = questions['narrativa'].length
currentQuestion['category'] = currentQuestionCategory

export const reducerQuestion = function (state = currentQuestion, action) {
    if (action.type === "UPDATE_QUESTION_TYPE"){
        currentQuestion = {}
        currentQuestionIndex = 0;
        debugger
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