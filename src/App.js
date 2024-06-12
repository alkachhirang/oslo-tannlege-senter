import './App.css';
import ProfessinallyClean from './components/ProfessinallyClean';
import TeethAirflowClean from './components/TeethAirflowClean';
import TeethCleaning from './components/TeethCleaning';

function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-[1920px]">
      <TeethCleaning />
      <TeethAirflowClean />
      <ProfessinallyClean />
    </div>
  );
}

export default App;
