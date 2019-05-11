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
                // var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var text1 = document.createTextNode(this.state.number-1);
                var text2 = document.createTextNode(this.state.text);
                // var text3 = document.createTextNode("");
                var span = document.createElement('span');
                span.innerHTML = `<button class="right btn btn-danger" id="${this.state.number-1}" onClick={this.del}>&#10008;</button> <button class="right btn btn-success" id="${this.state.number-1}" onClick={this.check}>&#10004;</button>`;
                td1.appendChild(text1);
                td2.appendChild(text2);
                // td3.appendChild(text3);
                td4.appendChild(span);
                tr.appendChild(td1);
                tr.appendChild(td2);
                // tr.appendChild(td3);
                tr.appendChild(td4);
                table.appendChild(tr);
            }.bind(this))
        
       }
    
  
        
    del() {
        console.log(2);
        // var x = document.getElementById(no)
        // x.parentNode.removeChild(x);
    }

    check() {
        console.log(1);
        // var x = document.getElementById(no)
        // if (x.className != "check") {
        //     x.className = "check";
        // } else {
        //     x.className = "";
        // }
    }


    render() {
      return (
        <div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col-md-1">#</th>
                        <th scope="col-md-9">Task</th>
                        <th scope="col-md-2" style={{textAlign: "right"}}>Percent: <span>{this.state.percent}</span>%</th>
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