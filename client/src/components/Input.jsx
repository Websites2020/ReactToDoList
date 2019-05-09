import React from 'react';

class Input extends React.Component {
    render() {
      return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Task</button>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Task Item</button>
                </div>
            </div>

        </div>
      )
    }
  }

export default Input