import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

    const [todos, setTodos] = useState(getLocalState());

    function CreateTodo(text) {
        const id = new Date().getTime().toString();
        const newTodo = {
            value: text,
            type: false,
            id: id,
        }
        setLocalState([...todos,newTodo]);
        setTodos([...todos, newTodo]);
        
    }

    function DeleteTodo(id) {
        const newTodos = todos.filter((item) => {
            if (item.id !== id) {
                return item;
            }
        }
        )
        setTodos(newTodos);
        setLocalState(newTodos);
    }
    function ChangeTypeTodo(id){
        const newTodos = todos.map((item)=>{
            if(item.id === id){
                return {...item,type:!item.type};
            }
            return item;
        })
        setTodos(newTodos);
        setLocalState(newTodos);
    }
    function DisplayTodos(type){
        let todos = getLocalState();
        switch(type){
            case 0:
                //const todos = getLocalState();
                setTodos(todos);
                break;
            case 1:
                 todos = todos.filter((item)=>{
                     if(item.type){
                         return item;
                     }
                 })
                 setTodos(todos);
                 break;
            case 2:
                todos = todos.filter((item)=>{
                    if(!item.type){
                        return item;
                    }
                })
                setTodos(todos);
                break;
        }
    }
    function setLocalState(newTodos){
        localStorage.setItem('todos',JSON.stringify(newTodos));
    }
    function getLocalState() {
        return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    }

    return (
            <AppContext.Provider
            value={
                {
                    todos,
                    DeleteTodo,
                    ChangeTypeTodo,
                    DisplayTodos,
                    CreateTodo,
                }
            }
            >
                {props.children}
            </AppContext.Provider>
    )
}