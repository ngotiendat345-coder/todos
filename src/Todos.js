import React, { useContext } from 'react';
import {AppContext} from './context';

function Todos(){
    const {todos,DeleteTodo,ChangeTypeTodo} = useContext(AppContext);

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((item)=>{
                    return(
                        <div className={item.type?"todo completed":"todo"} key={item.id}>
                            <li className="todo-item">{item.value}</li>
                            <button className="complete-btn"
                                onClick={()=>{
                                    ChangeTypeTodo(item.id)
                                }}
                            >
                                <i className="fas fa-check"></i>
                            </button>
                            <button className="delete-btn" onClick={()=>{
                                DeleteTodo(item.id);
                            }
                            }>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos;