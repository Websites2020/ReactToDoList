import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          percent: 100,
          number: 2
        };
    //   this.handleInput = this.handleInput.bind(this);
      this.UNSAFE_componentWillReceiveProps = this.UNSAFE_componentWillReceiveProps.bind(this);
       }

       UNSAFE_componentWillReceiveProps() {
            this.setState({
                number: this.props.number,
                percent: 100/this.state.number
            })
       }

    render() {
      return (
        <div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col-md-1">#</th>
                        <th scope="col-md-9">Task</th>
                        <th scope="col-md-2">Percent: <span>{this.state.percent}</span>%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{this.props.number}</th>
                        <td>{this.props.insert}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
    }
  }

export default Table