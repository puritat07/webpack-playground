import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import VisibilityFilter from './VisibilityFilter'

let todoId = 0

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      visibilityFilter: 'SHOW_ALL',
      todos: []
    }
  }

  handleAddTodo = (eventText) => {
    if (eventText.length > 0) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            completed: false,
            id: todoId++,
            text: eventText
          }
        ],
      })
    }
  }

  handleToggleVisibility = (e) => () => {
    let todosTemp = this.state.todos
    todosTemp[todosTemp.indexOf(e.value)].completed = !e.value.completed
    this.setState({
      todos:todosTemp
    })
  }
  
  handleDelete = (e) => () => {
    const todosTemp = [...this.state.todos.slice(0,this.state.todos.indexOf(e.value)),...this.state.todos.slice(this.state.todos.indexOf(e.value)+1)]
    this.setState({
      todos: todosTemp
    })
  }

  handleFilter = (e) => () => {
    this.setState({
      visibilityFilter: e
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>React Todo List</h1>
        <TodoForm 
          onSubmit={this.handleAddTodo}
        />
        <br />
        <TodoList 
          list={this.state.todos}
          onToggleVisibility={this.handleToggleVisibility}
          onDeleteClick={this.handleDelete}
          filter={this.state.visibilityFilter}
        />
        <VisibilityFilter 
          onFilter={this.handleFilter} 
          filter={this.state.visibilityFilter}
        />
        <hr />
        <h3>Press <kbd id="shortcut" className="shortcut">⌘⌥J</kbd> to open Developer Tools.</h3>
      </div>
    )
  }
}

export default App;
