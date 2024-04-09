import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Todo.css'

function Todo() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="234e61a0-f2e9-11ee-9d43-6be9ade7c159" class="todo-item">
            <h3 class="todo-text">hello</h3>
            <div class="completed-container">
                <h4 class="completed-text"> Completed?</h4>
                <input type="checkbox"/>
            </div>
            <button type="button" class="delete"> Delete </button>
        </div>
    </>
  )
}

export default App
