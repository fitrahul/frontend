import React, { useState } from 'react'

const TodoReact = () => {
    const [item, setItem] = useState("");
    const [todo, setTodo] = useState([]);
    // Add
    const handleAddTodo = () => {
        const triming = item.trim("")
        if (triming !== "" ) {
            const todoDatails = {
                name: item,
                id: todo.length + 1,
            }
            setTodo([...todo, todoDatails]);
        }
        setItem("");
    }
    // Delete
    const handleDeleteTodo = (key) => {
        setTodo(todo.filter(el => el.id !== key));
    }

    return (
        <>
            <input 
              onChange={(e) => {setItem(e.target.value)}} 
              value={item}
              type='text' 
              placeholder='Add Todo' 
            />
            <button onClick={handleAddTodo}>Add React</button>
            {todo.map((el) => (
                <div style={{ display: "flex" }}>
                    <div key={el.id} style={{ display: "flex", margin: "auto" }}>
                        <div>{el.name}</div>
                        <button onClick={() => { handleDeleteTodo(el.id) }}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TodoReact;