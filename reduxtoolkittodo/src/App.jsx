import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          📝 Redux Toolkit Todo App
        </h1>

        <AddTodo />
        <Todo />

      </div>
    </div>
  )
}

export default App