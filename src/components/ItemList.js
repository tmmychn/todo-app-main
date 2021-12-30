import React from 'react'
import TodoItem from './TodoItem'

const ItemList = (props) => {
    const items = props.items
    const todoItems = items.map((item, index) => 
        <TodoItem key={index} text={item}/>
    )
    return (
        <ul className="todo-list">
            {todoItems}
        </ul>
    )
}

export default ItemList
