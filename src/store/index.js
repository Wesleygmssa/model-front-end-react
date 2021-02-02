import { createStore } from 'redux';

const initalState = {
  botaoClicado: false,
};
const reducer = (state = initalState, action) => {
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
const store = createStore(reducer);
export default store;
