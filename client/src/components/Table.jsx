import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          percent: 100,
          number: 1,
          text: []
        };
        this.myRef = React.createRef();
      this.UNSAFE_componentWillReceiveProps = this.UNSAFE_componentWillReceiveProps.bind(this);
      this.del = this.del.bind(this);
      this.check = this.check.bind(this);
       }

       UNSAFE_componentWillReceiveProps() {
            this.setState({ 
                number: this.state.number+1, 
                percent: 100/this.state.number,
                text: this.state.text.concat(this.props.insert)
            }, function stateUpdateComplete() {
                        
                console.log(this.state.number-1)
                console.log(this.state.percent)
                console.log(this.state.text)

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
            <ol>
            {this.state.text.map((text, i) => 
                <li>{text[i]}</li>
            )}
            </ol>
        </div>
      )
    }
  }

export default Table