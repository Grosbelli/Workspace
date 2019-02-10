import React, { Component } from 'react';
import Header from './components/Header/';
import './styles.css';
import Nav from './components/Nav';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Header />
          <Content />
      </div>
    );
  }
}

export default App;
