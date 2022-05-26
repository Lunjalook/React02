import logo from './logo.svg';
import './App.css';
import Flower from './Flower';
import { Component } from 'react';

class App extends Component {

  render() {
    const colorFlower='red';
  return (
    <div className="App">
      <Flower  color={colorFlower}/>
    </div>
  );
  }
}


export default App;
