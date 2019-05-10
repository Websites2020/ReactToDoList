import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          percent: 100,
          number: 1,
          text: ""
        };
        this.myRef = React.createRef();
      this.UNSAFE_componentWillReceiveProps = this.UNSAFE_componentWillReceiveProps.bind(this);
       }

       UNSAFE_componentWillReceiveProps() {
            this.setState({ 
                number: this.state.number+1, 
                percent: 100/this.state.number,
                text: this.props.insert
            }, function stateUpdateComplete() {
                        
                console.log(this.state.number-1)
                console.log(this.state.percent)
                console.log(this.state.text)

                const table = this.myRef.current;
                var tr = document.createElement('tr');   
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var text1 = document.createTextNode(this.state.number-1);
                var text2 = document.createTextNode(this.state.text);
                td1.appendChild(text1);
                td2.appendChild(text2);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
            }.bind(this))
        
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
                <tbody ref={this.myRef}>

                </tbody>
            </table>
        </div>
      )
    }
  }

export default Table