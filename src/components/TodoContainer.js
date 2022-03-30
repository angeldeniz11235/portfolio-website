import  React  from "react";
import TodoList from "./TodoList";
class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Learn React",
                completed: true
            },
            {
                id: 2,
                title: "Learn Redux",
                completed: false
            },
            {
                id: 3,
                title: "Learn React Router",
                completed: false
            }

        ]
    }

    render() {
        return(
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}
export default TodoContainer;