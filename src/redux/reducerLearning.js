const defaultState = {
  "id": 0,
  "title": "Narrativa",
  "media": "https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Accessibility-Tips-750x498.jpg",
  "category": "Narrativa",
  "intro": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados.",
  // eslint-disable-next-line
  "full_explanation": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados. \
  \
  Exemplos de jogos que seguem esse pricipio:\
  \
  1) Mass Effect\
  Em Mass Effect o personagem Jeff “Joker” Moreau tem um caso moderado a grave da síndrome de Vrolik (Osteogenesis imperfecta), que causa extrema fragilidade nos ossos; ele nasceu com fraturas graves nas pernas e, mesmo com a medicina moderna, acha quase impossível andar, contando com muletas e aparelhos para as pernas.\
  \
  2) Grand Theft Auto V\
  Em GTA 5 o personagem Lester Crest sofre de uma doença devastadora que gradualmente desgastou suas habilidades motoras durante sua vida e o deixou em cadeira de rodas. Devido à sua mobilidade limitada, Lester cresceu consideravelmente acima do peso e também sofre de asma."
}

const concepts = {
  "narrativa" : {
  "id": 0,
  "title": "Narrativa",
  "media": "https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Accessibility-Tips-750x498.jpg",
  "category": "Narrativa",
  "intro": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados.",
  // eslint-disable-next-line
  "full_explanation": "Apresenta histórias e experiências que possam representar a diversidade que existe no mundo, de modo que os jogadores não se sintam excluídos ou estereotipados. \
  \
  Exemplos de jogos que seguem esse pricipio:\
  \
  1) Mass Effect\
  Em Mass Effect o personagem Jeff “Joker” Moreau tem um caso moderado a grave da síndrome de Vrolik (Osteogenesis imperfecta), que causa extrema fragilidade nos ossos; ele nasceu com fraturas graves nas pernas e, mesmo com a medicina moderna, acha quase impossível andar, contando com muletas e aparelhos para as pernas.\
  \
  2) Grand Theft Auto V\
  Em GTA 5 o personagem Lester Crest sofre de uma doença devastadora que gradualmente desgastou suas habilidades motoras durante sua vida e o deixou em cadeira de rodas. Devido à sua mobilidade limitada, Lester cresceu consideravelmente acima do peso e também sofre de asma."
},
"tecnologia" : {
  "id": 1,
  "media": "https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg",
  "title": "Tecnologia",
 "category": "Tecnologia",
 "intro": "É aquela que propicia a implementação de recursos que posssam ampliar a quantidade de jogadores que podem experimentar o jogo.",
 "full_explanation": " É aquela que propicia a implementação de recursos que posssam ampliar a quantidade de jogadores que podem experimentar o jogo. \
 \
 Exemplo que seguem esse pricipio:\
 \
 1)Overcooked!\
 Em Overcooked! é possivel remapear todos os controles do jogo, o que pode permitir vários jogadores com deficiencias motoras jogar o jogo.\
 \
 2) Playstation 4\
 Nesse console existe um menu de acessabilidade que permite entre outros:\
 a) Remapear botões \
 b) Configurar leitor de texto\
 c) Dar zoom durrante o jogo\
 d) Inverter cores\
 e) Aumentar texto\
 "
 }
}

export const reducerLearning = function(state = defaultState, action) {
  let currentConcept = {};

  if (action.type === "UPDATE_CONCEPT") {
    currentConcept.id = action.payload.id;
    currentConcept.title = action.payload.title;
    currentConcept.media = action.payload.media;
    currentConcept.category = action.payload.category;
    currentConcept.intro = action.intro;
    currentConcept.full_explanation = action.full_explanation;

    return currentConcept;
  } else if (action.type === "UPDATE_CONCEPT_TYPE"){
    Object.assign(currentConcept, concepts[action.payload.category])
    return currentConcept;
  } else if (action.type === "UPDATE_CONCEPT_EXAMPLE"){
    debugger
    Object.assign(currentConcept, state)

    currentConcept.id += 1;
    return currentConcept;
  }

  return defaultState;
};
