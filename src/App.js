import logo from './burakkiymaz.svg';
import './App.css';

function App() {

  /*This is my basic lovely index page*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          For getting more powerful cloud,
        </p>
        <a
          className="App-link"
          href="https://burakkiymaz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Blog
        </a>
      </header>
    </div>
  );
}

export default App;
