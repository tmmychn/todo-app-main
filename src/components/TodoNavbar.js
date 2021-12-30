import React from 'react'
import '../components/TodoComponent.css'
import $ from 'jquery'
import {useEffect, useCallback} from 'react'

const TodoNavbar = ({isHidden, updateFilter}) => {

    const selectFilter = useCallback(() => {
        // Highlight numbered dot when selected
        for (var i = 0; i < $(".todo-status-navbar li").length; i++){
            $(".todo-status-navbar li:eq(" + i + ")").on("click", function() {
                $(".todo-status-navbar li").removeClass("current")
                updateFilter($(this).index())
                $(this).addClass("current")
            });
         }
    }, [updateFilter])

    useEffect(() => {
        selectFilter()
    }, [selectFilter])
    
    return (
        <ul className={`todo-status-navbar todo-style text-semitrans ${isHidden}`}>
            <li className="current">All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
    )
}

export default TodoNavbar
