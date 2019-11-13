const defaultState = {
  "id": 0,
  "title": "Narrativa",
  "media": "https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg",
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
  } else if (action.type === "UPDATE_CONCEPT_EXAMPLE"){
    Object.assign(currentConcept, state)

    currentConcept.id += 1;
    return currentConcept;
  }

  return defaultState;
};
