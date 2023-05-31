import './App.css'
import TodoList from './TodoList'
import Counter from './Counter'

function App() {
  return (
    <>
      <TodoList />
      {/* <Counter /> */}
      {/* счетчик не будет работать потому что мы отвязали его редьсер от стора */}
    </>
  )
}

export default App
