import React, { Component } from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        // send states up to TodoGenerator to be added to Redux state
        this.props.triggerAdd({...this.state, id: uuid()});
        // clear state
        this.setState({
            text: ""
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    render() {
        return (
            <div>
                <form className="TodoForm" onSubmit={ this.handleSubmit }>
                    <label htmlFor="text">Todo Item</label>
                    <input name="text" id="text" value={ this.state.text } onChange={ this.handleChange } required />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;