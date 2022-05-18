import './App.css';
import { connect } from 'react-redux';
import Search from './components/Search.js';
import ResultsCard from './components/ResultsCard.js';
import Instructions from './components/Instructions.js';

function App({ district }) { 
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">Congress Search</h1>
        <Instructions />
        <Search />
        { district === '' ? '' : <ResultsCard /> }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    district: state.districtReducer
  }
}

export default connect(mapStateToProps)(App);
