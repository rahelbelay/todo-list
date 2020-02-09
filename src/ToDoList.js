import React from 'react';

let id = 0;

class ToDoList extends React.Component {
    state = {
        todos: [],
        currentInput: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit} >
                    <label>
                        List
                        <input type="text" value={this.state.currentInput} onChange={this._handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                    <h5>My Todos</h5>
                    <ul>
                        {
                            this.state.todos.map(todo => (
                                <div key={todo.id} style={{ display: 'flex' }}>
                                    <li>{todo.text}</li>
                                    <button onClick={() => this._removeTodo(todo.id)}>
                                        {`Done ${todo.id}`}
                                    </button>
                                </div>
                            ))
                        }
                    </ul>
                </form>
            </div >
        )
    }

    _handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._addTodo()
    }

    _removeTodo = (idToRemove) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== idToRemove)
        })
    }

    _addTodo = () => {
        if (this.state.currentInput.length > 0) {
            id++
            const newTodos = this.state.todos

            newTodos.push({
                id,
                text: this.state.currentInput
            })

            this.setState({
                todos: newTodos,
                currentInput: ''
            })
        }
    }
}

export default ToDoList;



