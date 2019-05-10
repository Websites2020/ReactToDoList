import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/Table';
import Input from './components/Input';

let input = "";

class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      input: ""
    };
  this.taskInput = this.taskInput.bind(this);
   }

   taskInput = (taskValue) => {
      this.setState({
        input: taskValue
    })
   }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Input taskInput={this.taskInput} />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
          
            <Table number={this.state.number} insert={this.state.input} />
            
          </div>
        </div>
      </div>
    )
      
  }
}

export default App;
