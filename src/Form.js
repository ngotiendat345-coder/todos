import React, { useContext, useEffect, useRef } from 'react';
import {AppContext} from './context';

function Form(){
    const inputValue=useRef(null);
    const selectValue = useRef(null);
    const {CreateTodo,DisplayTodos} = useContext(AppContext);

    function SubmitTodo(e){
        e.preventDefault();
        const value = inputValue.current.value;
        CreateTodo(value);
        inputValue.current.value = "";
    }
    useEffect(()=>{
        inputValue.current.focus();
    },[])
    return (
        <form onSubmit={SubmitTodo}>
            <input type="text" className="todo-input" ref={inputValue}/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onClick={(e)=>{
                        console.log(e.target.selectedIndex);
                        DisplayTodos(e.target.selectedIndex);
                    }}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div>
    </form>
    )
}

export default Form;