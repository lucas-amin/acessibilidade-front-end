const defaultState = {
    "id": 0,
    "title": "Narrativa",
    "media": "https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Accessibility-Tips-750x498.jpg",
    "category": "Narrativa",
    "intro": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados.",
    // eslint-disable-next-line
    "full_explanation": [   "\
  Exemplos de jogos que seguem esse pridsadsadscipio: \n \
  \
  \n 1) Mass Effect \n \
  Em Mass Effect o personagem Jeff “Joker” Moreau tem um caso moderado a grave da síndrome de Vrolik (Osteogenesis imperfecta), que causa extrema fragilidade nos ossos; ele nasceu com fraturas graves nas pernas e, mesmo com a medicina moderna, acha quase impossível andar, contando com muletas e aparelhos para as pernas.\
  \ "
  , "  Exemplos de jogos que seguem esse pricipio: \n \
 \n \n 2) Grand Theft Auto V \n \
  Em GTA 5 o personagem Lester Crest sofre de uma doença devastadora que gradualmente desgastou suas habilidades motoras durante sua vida e o deixou em cadeira de rodas.\
   Devido à sua mobilidade limitada, Lester cresceu consideravelmente acima do peso e também sofre de asma."]
}

const concepts = {
    "narrativa": {
        "id": 0,
        "title": "Narrativa",
        "media": "https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Accessibility-Tips-750x498.jpg",
        "category": "Narrativa",
        "intro": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados.",
        "images": [{"url": "https://1.bp.blogspot.com/-xdhe5bh_PfU/XPpduTXkJ8I/AAAAAAAACzI/1RGl5P2JvE8FU4Q74aVh9T1aSp0KqBLGgCLcBGAs/s320/X_MMXLC1.png", "alt": "Megaman X: com o menino ciborgue"},{"url": "https://img.elo7.com.br/product/zoom/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg", "alt": "Batman o super herói"}, {"url": "https://www.writeups.org/wp-content/uploads/Joker-Mass-Effect-2-Jeff-Moreau-a.jpg", "alt": "Jeff 'Joker' Moreau - Personagem do jogo Mass Effect com síndrome que causa extrema fragilidade nos ossos"},{"url": "https://vignette.wikia.nocookie.net/witcher/images/a/a0/Tw3_Geralt_of_Rivia_newest_render.png/revision/latest?cb=20170606064646", "alt": "Witcher 3: Geralt of Rivia"}],
        "full_explanation": ["\
  Exemplos de jogos que seguem esse principio: \n \
  \
  \n 1) Mass Effect \n \
  Em Mass Effect o personagem Jeff “Joker” Moreau tem um caso moderado a grave da síndrome de Vrolik (Osteogenesis imperfecta), que causa extrema fragilidade nos ossos; ele nasceu com fraturas graves nas pernas e, mesmo com a medicina moderna, acha quase impossível andar, contando com muletas e aparelhos para as pernas.\
  \ "
            , "  Exemplos de jogos que seguem esse principio: \n \
 \n 2) Grand Theft Auto V \n \
  Em GTA 5 o personagem Lester Crest sofre de uma doença devastadora que gradualmente desgastou suas habilidades motoras durante sua vida e o deixou em cadeira de rodas.\
   Devido à sua mobilidade limitada, Lester cresceu consideravelmente acima do peso e também sofre de asma."]},
    "tecnologia": {
        "id": 1,
        "media": "https://pbs.twimg.com/media/DgJyJ_cUYAAARAs.png",
        "title": "Tecnologia",
        "category": "Tecnologia",
        "intro": "É aquela que propicia a implementação de recursos que posssam ampliar a quantidade de jogadores que podem experimentar o jogo.",
        "full_explanation": ["Exemplo que seguem esse pricipio: \n \
 \
 \n  1)Overcooked!\
 Em Overcooked! é possivel remapear todos os controles do jogo, o que pode permitir vários jogadores com deficiencias motoras jogar o jogo.\
 \
 \n \n É aquela que propicia a implementação de recursos que posssam ampliar a quantidade de jogadores que podem experimentar o jogo.\",\
        Exemplo que seguem esse pricipio: \
 \ "," 2) Playstation 4\
 Nesse console existe um menu de acessabilidade que permite entre outros:\
 \n \n a) Remapear botões \
 \n b) Configurar leitor de texto\
 \n c) Dar zoom durrante o jogo\
 \n d) Inverter cores\
 \n e) Aumentar texto\
 "] },
    "regras": {
            "id": 2,
            "title": "Regras",
            "full_explanation": ["Não criam impedimentos para que os jogadores com deficiência possam experimentar o jogo e manter o mundo do jogo consistente",
            "Exemplo que seguem esse pricipio: \n \
            \n \
            O jogo Monument Valley  \n \
            Nesse jogo não há regras relacionadas à tempo para completar as fases, portanto jogadores que possuem algum tipo de dificuldade na velocidade do jogo consegue joga-lo completamente sem nenhuma regra o frustrando."
            ]
        },
    "objetivos":{
        "id": 3,
        "title": "Objetivos",
        "full_explanation": ["São desafiadores para pessoas com diferentes características física, motoras, cognitivas, sociais, economicas e culturais."] 
    },
    "mecanicas":{
        "id": 4,
        "title": "Mecânicas",
        "full_explanation": ["Propiciam aos jogadores diversas maneiras de realizar ações no mundo do jogo, sem que essas ações ofereçam benefícios ou dificuldades extras."]
    }
}


export const reducerLearning = function (state = defaultState, action) {
    let currentConcept = {};

    if (action.type === "UPDATE_CONCEPT") {
        currentConcept.id = action.payload.id;
        currentConcept.title = action.payload.title;
        currentConcept.media = action.payload.media;
        currentConcept.category = action.payload.category;
        currentConcept.intro = action.intro;
        currentConcept.full_explanation = action.full_explanation;

        return currentConcept;
    } else if (action.type === "UPDATE_CONCEPT_TYPE") {
        Object.assign(currentConcept, concepts[action.payload.category])
        return currentConcept;
    } else if (action.type === "UPDATE_CONCEPT_EXAMPLE") {
        Object.assign(currentConcept, state)

        currentConcept.id += 1;
        return currentConcept;
    }

    return concepts['narrativa'];
};