import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
    let shownItems = props.list.filter(
        (item) => {
            switch(props.filter) {
                case "SHOW_ACTIVE":
                    return !item.completed
                case "SHOW_COMPLETED":
                    return item.completed
                default:
                    return true
            }
        }
    )

    return (
        <div>
            Todo List:
            <ol>
                {shownItems.map((value,index) => (
                    <TodoListItem 
                        key={index} 
                        value={value}
                        onToggleVisibility={props.onToggleVisibility}
                        onDeleteClick={props.onDeleteClick}
                    />
                )
                )}
            </ol>
        </div>
    )
}

export default TodoList