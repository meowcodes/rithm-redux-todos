import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.triggerDelete(this.props.id)
  }

  render() {
    return (
      <div className="Todo">
        <p>{ this.props.text }</p>
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}

export default Todo;