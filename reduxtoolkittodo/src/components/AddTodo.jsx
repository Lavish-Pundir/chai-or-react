import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')   // React state to store the input value

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo(input))
        setInput('')   // Clear the input field after dispatching the action
    }


    return (
        <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
            <input
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition"
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo
