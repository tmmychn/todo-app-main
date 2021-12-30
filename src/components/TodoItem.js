import React from 'react'

const TodoItem = (props) => {

    return (
        <li className={"todo-item-container todo-style active"}>
            <div className="todo-item new-item">
                <span className="todo-checkbox"/>
                <div className="todo-item-text">{props.text}</div>
            </div>
            <span className="todo-item-close"/>
        </li>
    )
}

export default TodoItem
