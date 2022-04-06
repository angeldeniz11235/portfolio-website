import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.todo.title}
            </li>
        );
    }
}

//prop types
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
};

export default TodoItem;