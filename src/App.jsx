import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx';
import NewTodo from './NewTodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id="todos">
      <NewTodo />
      <Todo />
  </section>
  )
}

export default App
