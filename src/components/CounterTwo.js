import React, { useReducer, useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CountContext } from '../contexts/CountContext';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const { user, toggleUser } = useContext(UserContext);
  const { countState, countDispatch } = useContext(CountContext);
  const [name, setName] = useState('john');

  const toggleName = () => {
    if (name !== 'john') {
      setName('john');
    } else {
      setName('doe');
    }
  };

  return (
    <div className="counterone">
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: 'reset', value: 1 })}>
        reset
      </button>
      <p>
        <p>first local counter </p>
        {count.firstCounter}
      </p>

      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          decrement
        </button>
        <p>
          <p>second local counter</p>
          {count.secondCounter}
        </p>
      </div>
      {/* UserContext */}
      <p>global user context</p>
      <div>
        {user}
        <button onClick={toggleUser}>toggle</button>
      </div>
      <p>local user </p>
      <div>
        {name}
        <button onClick={() => toggleName()}>toggle</button>
      </div>
      <p>global counter </p>
      <p>Z {countState.counterz}</p>
      <button onClick={() => countDispatch({ type: 'incrementz', value: 1 })}>
        z++
      </button>
      <button onClick={() => countDispatch({ type: 'resetz' })}>reset</button>
      <button onClick={() => countDispatch({ type: 'decrementz', value: 1 })}>
        --z
      </button>
    </div>
  );
};

export default CounterTwo;
