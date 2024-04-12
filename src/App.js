import './App.css';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <h1 className="header">List of Movies</h1>
      <div className="row">
        <div className="col-lg-4">
          <Movie />
        </div>
        <div className="col-lg-4">
          <Movie />
        </div>
        <div className="col-lg-4">
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;
