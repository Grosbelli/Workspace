import React, { Component } from 'react';
import Header from './components/Header/';
import './styles.css';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Header />
      </div>
    );
  }
}

export default App;
