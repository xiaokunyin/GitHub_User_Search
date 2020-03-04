import React from 'react';
import logo from './logo.png';
import './App.css';
import GitHubUserSearch from './component/GitHubUserSearch';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <h2>GitHub User Search</h2>
      </div>

      <div className='container'>
        <GitHubUserSearch top={10}/>
      </div>
    </div>
  );
}

export default App;
