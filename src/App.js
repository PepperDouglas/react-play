import logo from './logo.svg';
import './App.css';
import StyleDiv from './StyleDiv';
import DataContainer from './prac';
import ChessContainer from './chessContainer';
import Navigation from './Navigation';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Plague Doctussy</code> Productions
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
