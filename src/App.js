import React, { Component } from 'react';
import RoutingConfig from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <div>
            <Header />
            <RoutingConfig />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
