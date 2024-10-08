import logo from './holberton-logo.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>E-mail:</label>
          <input type='text' id='email' name='email'></input>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password'></input>
          <button type='button'>OK</button>
        </div>
        <div className='App-footer'>
          <p> Copyright {getFullYear()} - {getFooterCopy()} </p>       
          </div>
    </div>
  );
}

export default App;
