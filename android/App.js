import React from 'react';
import Header from './pages/Header.js';
import Main from './pages/Main.js';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    );
  }
}
