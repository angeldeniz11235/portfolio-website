import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
    render () {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        );
    }
}

// PropTypes
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired    
};

export default TodoList;