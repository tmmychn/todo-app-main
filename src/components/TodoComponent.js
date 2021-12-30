import React from 'react'
import './TodoComponent.css'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import TodoNavbar from './TodoNavbar'
import ItemList from './ItemList'

const TodoComponent = () => {

    const todoItems = [
        "Complete todo app",
        "Gamuda Gardens",
        "Jog in the park",
        "Jog in the park",
        "Jog in the park"
    ]
        
    
    const [items, setItems] = useState(todoItems)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState(0)

    const updateItemCount = () => {
        setCount($(".active").length)
    }

    const clearCompleted = () => {
        $(".completed").addClass("cleared")
    }

    // Function to be passed as prop into Todo Navbar
    // To update filter as tab is selected
    const updateFilter = (i) => {
        setFilter(i)
    }

    
    
    /* ------------------- */
    /* useEffect           */
    /* ------------------- */
    useEffect(() => {
        $("#todo-create-input").on("keydown", function(e){
            if(e.keyCode === 13) {
                addItem($(this).val())
            }
        })

        // Allow li to be dragged and rearranged
        $( function() {
            $( ".todo-list" ).sortable();
        } );

        const addItem = (newItem) => {
                const newTodoItems = [...items, newItem]
                setItems(newTodoItems)
            }

        const toggleItem = () => {
            for(var i = 0; i < $(".new-item").length; i++)
            {
                $(".new-item:eq(" + i + ")").on("click", function(){
                    $(this).parent().toggleClass("active completed")
                    console.log($(this) + "toggled")
                    
                    // Update item count after each toggle
                    updateItemCount()
                })
            }

            // remove "new-item" class from todo items that already have event-listenrs
            $(".todo-item").removeClass("new-item")
            console.log("toggle item called")
        }

        const clearItem = () => {
            for(var i = 0; i < $(".todo-item-close").length; i++)
            {
                $(".todo-item-close:eq(" + i + ")").on("click", function(){
                    $(this).parent().removeClass("active")
                    $(this).parent().addClass("cleared")
                    
                    // Update item count after each clear
                    updateItemCount()
                })
            }
        }

        const showFilteredResults = (i) => {
            switch(i) {
                case 0:
                    $(".todo-item-container").removeClass("hidden")
                    console.log("case 0" + filter)
                    break
                case 1:
                    $(".todo-item-container").removeClass("hidden")
                    $(".todo-item-container:not(.active)").addClass("hidden")
                    console.log("case 1" + filter)
                    break
                case 2:
                    $(".todo-item-container").removeClass("hidden")
                    $(".todo-item-container:not(.completed)").addClass("hidden")
                    break
                default:
                    $(".todo-item-container").removeClass("hidden")
                    console.log("case default")
                    break
            }
        }

        const todoItemHover = () => {
            $(".todo-item-container").hover(
                function () {
                $(this).addClass('hover');
              }, 
              function () {
                $(this).removeClass('hover');
              });
        }
        
        toggleItem()
        clearItem()
        updateItemCount()
        showFilteredResults(filter)
        todoItemHover()
    }, [filter, items])

    return (
        <div className='todo-container'>
            <div className="todo-create todo-style">
                <span className="todo-checkbox"/>
                <input type="text" placeholder="Create a new todo..." 
                id="todo-create-input" /> 
            </div>
            <div className="overflow-container">
                <div className="todo-list-container">
                    <ItemList items={items} setCount={setCount}/>
                    <div className="todo-menu-container text-semitrans">
                        <div>{count} items left</div>
                        {/* Clear completed button */}
                        <button onClick={clearCompleted}>Clear Completed</button>
                    </div>
                </div>
                <TodoNavbar updateFilter={updateFilter}/>
            </div>
            
            <h3 className="drag-text text-semitrans">Drag and drop to reorder list</h3>
        </div>
    )
}

export default TodoComponent
