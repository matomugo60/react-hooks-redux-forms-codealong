import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from './todosSlice'

function CreateTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(todoAdded(text))
  }

  // console.log()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label> add todo</label>
          <input value={text} type='text' onChange={handleChange} />
          <input type='submit' />
        </p>
      </form>
      <p> Form Text: {text}</p>
    </div>
  )
}

export default CreateTodo
