import { CountContext } from '../contexts/CountContext';

import { useContext } from 'react';

const CounterOne = () => {
  const { countState, countDispatch } = useContext(CountContext);
  return (
    <div className="counterone">
      <button onClick={() => countDispatch({ type: 'incrementx', value: 1 })}>
        increment
      </button>
      <button onClick={() => countDispatch({ type: 'decrementx', value: 1 })}>
        decrement
      </button>
      <button onClick={() => countDispatch({ type: 'resetx' })}>reset</button>
      <div>
        <p>global counter </p> X {countState.counterx}
      </div>
    </div>
  );
};

export default CounterOne;
