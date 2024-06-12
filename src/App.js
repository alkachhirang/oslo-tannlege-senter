import './App.css';
import TeethAirflowClean from './components/TeethAirflowClean';
import TeethCleaning from './components/TeethCleaning';

function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-[1920px]">
      <TeethCleaning />
      <TeethAirflowClean />
    </div>
  );
}

export default App;
