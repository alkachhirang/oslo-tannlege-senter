import './App.css';
import TeethCleaning from './components/TeethCleaning';
import TeethAirflow from './components/TeethAirflow';

function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-[1920px]">
      <TeethCleaning />
      <TeethAirflow />
    </div>
  );
}

export default App;
