import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState('')

  // useRef Hook
  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword ])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()      /* ? is a optional kuki valu null bhi hoo sakti hai */
    passwordRef.current?.setSelectionRange(0, 20);        /* select range function */        
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-4 py-6 my-8 bg-gray-900 text-orange-400'>
        <h1 className='text-white text-center text-xl font-semibold mb-4'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-slate-800'>
          <input
          ref={passwordRef}
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-transparent text-white placeholder-gray-400'
            placeholder='Generate password...'
            readOnly
          />
          <button
          onClick={copyPasswordToClipboard}
            className='bg-blue-600 hover:bg-blue-800 text-white px-4 transition'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed(prev => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed(prev => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



/*
import { useCallback, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState('')

  // useRef Hook
  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword ])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-4 py-6 my-8 bg-gray-900 text-orange-400'>
        <h1 className='text-white text-center text-xl font-semibold mb-4'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-slate-800'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-transparent text-white placeholder-gray-400'
            placeholder='Generate password...'
            readOnly
          />
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 transition'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed(prev => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed(prev => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


*/