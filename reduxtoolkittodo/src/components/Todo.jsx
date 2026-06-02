import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { FaTrash } from "react-icons/fa";


function Todo() {
    const todos = useSelector((state) => state.todos.todos)   /* Acces the todos from Redux store */
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h2 className="text-white text-lg mb-3">Todos</h2>

                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg"
                        >
                            <span className="text-white">{todo.text}</span>
                           
                             {/* Old button code */}

                            {/* <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                            >
                                ❌
                            </button> */}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition flex items-center justify-center"
                            >
                                <FaTrash />
                            </button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todo
