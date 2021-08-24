import './App.css';
import React, { Component } from 'react';
import { Films } from './films';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Films />
      </div>
    );  
  }
}

/*
function App() {
  return (
    <div className="App">
      <Films />
    </div>
  );
}
*/

export default App;
