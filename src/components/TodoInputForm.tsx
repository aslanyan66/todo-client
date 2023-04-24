import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useCreateTodo } from 'hooks'

const TodoInputForm = () => {
  const [todo, setTodo] = useState('')
  const { handleCreateTodo } = useCreateTodo()

  const onInput = (evt: ChangeEvent<HTMLInputElement>) => setTodo(evt.target.value)
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (todo.trim()) {
      handleCreateTodo(todo)
      setTodo('')
    }
  }

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <TextField
        type="text"
        label="Add your todo"
        variant="outlined"
        fullWidth
        value={todo}
        onChange={onInput}
      />

      <Button type="submit" sx={{ width: '100px' }} variant="contained">
        Add
      </Button>
    </form>
  )
}

export default TodoInputForm
