import './App.css';
import Search from './components/Search.js';
import ResultsCard from './components/ResultsCard.js';

function App() {
  return (
    <div className="App">
      <h1>Congress Search</h1>
      <Search />
      <ResultsCard />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    district: state.districtReducer
  }
}

export default App;
