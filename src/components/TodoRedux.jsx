import React, { useState } from 'react'

const TodoRedux = () => {
  const [item, setItem] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder='Add Todo Item'
        value={item}
        onChange={(e) => {setItem(e.target.value)}}
      />
      <button>Add Redux</button>
    </div>
  )
}

export default TodoRedux;