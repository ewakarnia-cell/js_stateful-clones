function transformStateWithClones(initialState, actions) {
  let currentState = initialState;
  const history = [];

  actions.forEach((action) => {
    const clonedState = JSON.parse(Json.stringify(currentState))

  });

  return history; 
}