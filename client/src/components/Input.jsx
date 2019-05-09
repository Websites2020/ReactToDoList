import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          input: ''
        };
    //   this.handleInput = this.handleInput.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
       }

    handleInputChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    
    handleInput = () => {
        console.log(this.state.input)
        if (this.state.input != '') {
            this.props.taskInput(this.state.input)
            this.setState({
                input: ''
            })
        }
    }
    render() {
      return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" onChange={this.handleInputChange} value={this.state.input} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" onClick={this.handleInput} type="button" id="button-addon2">Add Task</button>
                </div>
            </div>
        </div>
      )
    }
  }

export default Input