import React from 'react';
import Todos from './Todos';
import Form from './Form';

function App() {
    return (
        <>
            <header>
                <h1>Ed's Todo List</h1>
            </header>
            <Form />
            <Todos />
        </>

    )
}
export default App;