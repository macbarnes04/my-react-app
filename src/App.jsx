import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id="todos">
    <Todo />
  </section>
  )
}

export default App
