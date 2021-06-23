import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/CountReducer';

export const CountContext = createContext();

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{
        countState: state,
        countDispatch: dispatch,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
