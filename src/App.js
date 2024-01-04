import logo from './logo.svg';
import './App.css';
import Navigation from './Nav/Navigation';
import Main from './Nav/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Plague Doctor</code> Productions
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        </a>
          <div>Navigation Menu</div>
          <Navigation />
          <Main />
          
      </header>
    </div>
  );
}

export default App;
