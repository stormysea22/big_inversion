import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Becca"
        lastName="Theismann"
        age={26}
        hairColor="brown" />
      <PersonCard
        firstName="Saba"
        lastName="Fluffy"
        age="7"
        hairColor="Dark Gray" />
      <PersonCard
        firstName="Andrew"
        lastName="Theismann"
        age={34}
        hairColor="Dark Brown" />
    </div>
  );
}

export default App;
