import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/Table';
import Input from './components/Input';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Input />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          
          <div className="col-md-12">
            <Table />
          </div>
          
        </div>
      </div>
    )
      
  }
}

export default App;
