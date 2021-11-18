import logo from './protein.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          For getting more protein,
        </p>
        <a
          className="App-link"
          href="https://protein.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Protein Tech
        </a>
      </header>
    </div>
  );
}

export default App;
