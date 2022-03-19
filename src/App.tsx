import './App.css';
import { Counter } from './base/Counter';
import { CounterBy } from './base/CounterBy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Aprende React
      </header>
      <Counter initialValue={0}/>
      <CounterBy/>
    </div>
  );
}

export default App;
