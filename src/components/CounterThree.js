import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CountContext } from '../contexts/CountContext';

const CounterThree = () => {
  const { user, toggleUser } = useContext(UserContext);
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div className="counterone">
      <p>counter context</p>
      <p>global counter</p>
      {/* CountContext */}
      <div>X {countState.counterx}</div>
      <div>Y {countState.countery}</div>
      <div>Z {countState.counterz}</div>

      {/* increment buttons */}
      <button onClick={() => countDispatch({ type: 'incrementx', value: 1 })}>
        x++
      </button>
      <button onClick={() => countDispatch({ type: 'incrementy', value: 1 })}>
        y++
      </button>
      <button onClick={() => countDispatch({ type: 'incrementz', value: 1 })}>
        z++
      </button>

      {/* reset */}
      <div>
        <button onClick={() => countDispatch({ type: 'reset' })}>reset</button>
      </div>

      {/* decrement buttons */}
      <button onClick={() => countDispatch({ type: 'decrementx', value: 1 })}>
        --x
      </button>
      <button onClick={() => countDispatch({ type: 'decrementy', value: 1 })}>
        --y
      </button>
      <button onClick={() => countDispatch({ type: 'decrementz', value: 1 })}>
        --z
      </button>

      {/* UserContext */}
      <div>
        <p>user context</p>
        {user}
        <button onClick={toggleUser}>toggle</button>
      </div>
    </div>
  );
};

export default CounterThree;
