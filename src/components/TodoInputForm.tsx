import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useCreateTodo, useSnackbar } from 'hooks'

const TodoInputForm = () => {
  const [todo, setTodo] = useState('')
  const { handleCreateTodo } = useCreateTodo()

  const { open: showMessage } = useSnackbar()

  const onInput = (evt: ChangeEvent<HTMLInputElement>) => setTodo(evt.target.value)
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    const currentValue = todo.trim()
    evt.preventDefault()
    if (currentValue) {
      handleCreateTodo(currentValue)
    } else {
      showMessage({ severity: 'warning', message: 'Please type your todo.' })
    }
    setTodo('')
  }

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <TextField
        type="text"
        label="Add new todo"
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
