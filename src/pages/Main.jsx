import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Activities from './Activities.jsx';
import Documentation from './Documentation.jsx';
import Notes from './Notes.jsx';
import ToDo from './ToDo.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <main>
          <Switch>
            <Route exact path='/' component={Activities}/>
            <Route path='/todo' component={ToDo}/>
            <Route path='/notes' component={Notes}/>
            <Route path='/documentation' component={Documentation}/>
          </Switch>
      </main>
    );
  };
}
