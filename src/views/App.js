import logo from './logo.svg';
import './App.scss';
import MyComponent from './MyExample/MyComponent';
/**
 * 
 * 2 components:  class component / function component (function , arrow)
 * 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>fullstack6</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
