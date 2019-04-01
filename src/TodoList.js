import React, { Component } from 'react';
import { connect } from "react-redux";
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(obj){
        console.log("IN ADD MEME", obj);
        this.props.dispatch({
            type: "ADD",
            payload: obj
        })
    }

    deleteTodo(id){
        console.log("IN DELETE MEME", id);
        this.props.dispatch({
            type: 'DELETE',
            payload: { id }
        });
    }

    render() {
        const todos = this.props.todos.map( todo => 
            <Todo triggerDelete={ this.deleteTodo } key={ todo.id } id={ todo.id } text={ todo.text } />
        )

        return (
            <div>
                <TodoForm triggerAdd={ this.addTodo }/>
                { todos }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("IN MAP", state);
    return { todos: state.todos };
}

const connectToState =
    connect(mapStateToProps);

export default connectToState(TodoList);