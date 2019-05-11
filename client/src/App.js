import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/Table';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      input: [],
      percent: 0,
      number: 1,
      checked: 0,
      total: 0
    };
  this.taskInput = this.taskInput.bind(this);
  this.check = this.check.bind(this);
  this.del = this.del.bind(this);
   }

   taskInput = (taskValue) => {
      this.setState({
        input: this.state.input.concat(taskValue),
        percent: (this.state.percent/this.state.number).toFixed(2),
        number: this.state.number+1,
        total: this.state.total+1
    })
   }

   del(e) {
    let x = document.getElementById(e.target.id)

    console.log(e.target.id);
    let array = this.state.input
    console.log(array[e.target.id])
    array.splice(e.target.id, 1)
    
    console.log(array)
    this.setState({
      input: array,
      total: this.state.total-1,
    })
    
    if (x.className == "check") {
      this.setState({
        checked: this.state.checked-1,
        
      }, function updateCheckedPer() {
        console.log(this.state.checked)
        this.setState({
          percent: ((this.state.checked/this.state.total)*100).toFixed(2)
        })
      }.bind(this))
    }
  }

  check(e) {
    console.log(e.target.id);
    console.log(this.state.number)
    console.log(this.state.total)
    let x = document.getElementById(e.target.id)

    if (x.className == "") {
      this.setState({
        checked: this.state.checked+1,
      }, function updateCheckedPer() {
        console.log(this.state.checked)
        this.setState({
          percent: ((this.state.checked/this.state.total)*100).toFixed(2)
        })
      }.bind(this))
      x.className = "check";
    } else if (x.className == "check") {
      this.setState({
        checked: this.state.checked-1,
        
      }, function updateCheckedPer() {
        console.log(this.state.checked)
        this.setState({
          percent: ((this.state.checked/this.state.total)*100).toFixed(2)
        })
      }.bind(this))
      x.className = "";
    }
  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <br />
              <Input taskInput={this.taskInput} />
            <br />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
          
            
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th className="textRight" scope="col">Percent <span>{this.state.percent}</span>%</th>
                </tr>
              </thead>
              <tbody>
              {this.state.input.map((text, i) =>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td id={i} className="">{text}</td>
                  <td>
                  <button className="right btn btn-danger" id={i} onClick={this.del}>&#10008;</button>
                  <button className="right btn btn-success" id={i} onClick={this.check}>&#10004;</button>
                  </td>
                </tr>  
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
      
  }

}

export default App;
