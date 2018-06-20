import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import logo from './images/powerpack-grey.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <Header logo={logo} />
	  <Content />
      </div>
    );
  }
}

export default App;
