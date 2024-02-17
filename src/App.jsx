import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='w-full flex flex-col items-center justify-start min-h-screen'>
      <h1>Learning Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
