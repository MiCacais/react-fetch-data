import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Details from './components/containers/Details/Details';
import List from './components/containers/List/List';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/:id" exact component={Details}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
