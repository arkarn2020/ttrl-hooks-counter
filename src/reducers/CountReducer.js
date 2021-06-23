export const initialState = {
  counterx: 0,
  countery: 10,
  counterz: 100,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementx':
      return { ...state, counterx: state.counterx + action.value };
    case 'decrementx':
      return { ...state, counterx: state.counterx - action.value };
    case 'incrementy':
      return { ...state, countery: state.countery + action.value };
    case 'decrementy':
      return { ...state, countery: state.countery - action.value };
    case 'incrementz':
      return { ...state, counterz: state.counterz + action.value };
    case 'decrementz':
      return { ...state, counterz: state.counterz - action.value };
    case 'resetx':
      return { ...state, counterx: initialState.counterx };
    case 'resety':
      return { ...state, countery: initialState.countery };
    case 'resetz':
      return { ...state, counterz: initialState.counterz };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
