import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Message from './components/message/Message';
import Homepage from './components/homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/message/:id' component={Message} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
