const initalState = {
  botaoClicado: false,
};

// estado da aplicação
const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
