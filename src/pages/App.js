import React, { Component } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
