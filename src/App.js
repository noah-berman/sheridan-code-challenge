import React, { Component } from 'react';

import './App.css';

import Top from './Containers/Top.js'
import Main from './Containers/Main.js'
import Footer from './Containers/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
