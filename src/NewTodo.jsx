import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './NewTodo.css'

function NewTodo() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="new-item">
                <h2>Add a new To-Do Item</h2>
                <form id="form">
                    <input id="new_item" type="text" name="comment" placeholder="Add a new to do item..."/>
                    <button type="submit">Add To My List</button>
                </form>
            </div>
    </>
  )
}

export default NewTodo
