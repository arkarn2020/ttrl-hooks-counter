import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import { UserContextProvider } from '../src/contexts/UserContext';
import { CountContextProvider } from '../src/contexts/CountContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CountContextProvider>
          <CounterOne />
          <CounterTwo />
          <CounterThree />
        </CountContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
