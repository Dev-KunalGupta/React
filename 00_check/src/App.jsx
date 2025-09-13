import Button from './components/Button'
import Header  from './components/Header'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <div className="todo-container">
      <Header title="Todo App"/>
      <TodoItem item="Eat"/>
      <TodoItem item="Sleep"/>
      <TodoItem item="Repeat"/>
      <Button/>
    </div>
  )
}

export default App