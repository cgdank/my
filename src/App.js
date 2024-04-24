import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <h1 className="header">List of Movies</h1>
      <div className="row">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
